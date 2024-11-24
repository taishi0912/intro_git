"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import { FaArrowLeft } from "react-icons/fa"; // 戻るボタン用アイコンをインポート

const LearningPlanPage = () => {
  const [savedData, setSavedData] = useState(null);
  const [learningPlan, setLearningPlan] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAndGeneratePlan = async () => {
      try {
        // 1. Flaskサーバーからデータを取得
        const response = await fetch("http://127.0.0.1:5000/get_data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data = await response.json();
        const latestData = data[data.length - 1];

        setSavedData(latestData);

        // 2. Dify APIにデータを送信
        const difyResponse = await fetch("https://api.dify.ai/v1/completion-messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer app-C9BkndzIHUluQyXMZdomT8N1`, // 実際のAPIキーに置き換えてください
          },
          body: JSON.stringify({
            inputs: {
              instrument: latestData.instrument,
              level: latestData.level.toString(),
              goal: latestData.goal,
              time: latestData.time,
              genre: latestData.genre,
            },
            response_mode: "blocking",
            user: "user-123",
          }),
        });

        if (!difyResponse.ok) {
          const errorData = await difyResponse.json();
          throw new Error(errorData.message || "Dify APIからのレスポンスでエラーが発生しました");
        }

        const difyResult = await difyResponse.json();

        setLearningPlan(difyResult.answer);

      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndGeneratePlan();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-200 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">学習プランを作成しています...</h2>
          <div className="loader mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-pink-200 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-red-500 mb-4">エラー</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <Link href="/mypage">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 flex items-center justify-center">
              <FaArrowLeft className="mr-2" />
              マイページに戻る
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-pink-200 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">学習プラン</h1>
        {learningPlan ? (
          <>
            <div className="prose prose-lg max-w-none mb-8">
              <ReactMarkdown>
                {learningPlan}
              </ReactMarkdown>
            </div>

            <div className="text-center">
              <Link href="/mypage">
                <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 flex items-center justify-center space-x-2">
                  <FaArrowLeft className="text-lg" />
                  <span>マイページに戻る</span>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-700">学習プランを生成できませんでした。</p>
        )}
      </div>
    </div>
  );
};

export default LearningPlanPage;
