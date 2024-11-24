"use client";

import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa"; // DM用のアイコンをインポート

const MyPage = () => {
  const userName = "山田太郎"; // 例としての名前
  const userBirthDate = "1990年1月1日"; // 例としての生年月日
  const userImage = "/images/Taro.png"; // ユーザーの画像URL
  const matchingHistory = [
    {
      date: "2024年10月01日",
      result: "マッチング成功",
      photo: "/images/Nkou.jpg",
      name: "山田 太郎",
      background: "N高等学校卒業、カスタネット",
      experience: 15,
      age: 30,
      fee: 10000,
      online: true,
    },
    {
      date: "2024年09月15日",
      result: "マッチング成功",
      photo: "/images/Hanako.png",
      name: "田中 花子",
      background: "東京音楽大学卒業、ジャズピアニスト",
      experience: 5,
      age: 30,
      fee: 3000,
      online: true,
    },
    {
      date: "2024年08月30日",
      result: "マッチング成功",
      photo: "/images/Kento.jpg",
      name: "山崎 賢人",
      background: "コロラド州立音楽大学卒業、ブルースギタリスト",
      experience: 5,
      age: 30,
      fee: 2000,
      online: true,
    },
  ];

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-pink-200 w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center">マイページ</h1>

        {/* ユーザー情報セクション */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={userImage}
            alt="ユーザーの画像"
            className="w-32 h-32 rounded-full border-4 border-pink-500 mb-4 shadow-lg"
          />
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-pink-500 mb-2">ユーザー情報</h2>
            <p className="text-gray-700 text-lg"><strong>名前:</strong> {userName}</p>
            <p className="text-gray-700 text-lg"><strong>生年月日:</strong> {userBirthDate}</p>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-8">
          <Link href="/shindan">
            <button className="w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
              マッチング診断に進む
            </button>
          </Link>

          <Link href="/direct-messages">
            <button className="w-full px-6 py-3 bg-pink-300 text-pink-800 font-semibold rounded-lg shadow-md hover:bg-pink-400 transition duration-300 flex items-center justify-center space-x-2">
              <FaPaperPlane className="text-lg" />
              <span>DM</span>
            </button>
          </Link>
        </div>

        {/* マッチング履歴セクション */}
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">マッチング履歴</h2>
          <ul className="space-y-6">
            {matchingHistory.map((entry, index) => (
              <li key={index} className="bg-pink-50 p-6 rounded-xl shadow-md border border-pink-200 flex flex-col md:flex-row items-center md:items-start">
                <img
                  src={entry.photo}
                  alt={entry.name}
                  className="w-24 h-24 rounded-full border-2 border-pink-400 mb-4 md:mb-0 md:mr-6 shadow"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-pink-500">{entry.name}（{entry.age}歳）</h3>
                    {entry.online && <span className="text-green-500 text-sm">オンライン</span>}
                  </div>
                  <p className="text-gray-700 mb-1"><strong>日時:</strong> {entry.date}</p>
                  <p className="text-gray-700 mb-1"><strong>結果:</strong> {entry.result}</p>
                  <p className="text-gray-700 mb-1"><strong>経歴:</strong> {entry.background}</p>
                  <p className="text-gray-700 mb-1"><strong>経験年数:</strong> {entry.experience}年</p>
                  <p className="text-gray-700"><strong>料金:</strong> ¥{entry.fee} / 時間</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
