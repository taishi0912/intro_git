// pages/diagnostic.js
"use client"
import { useState } from "react";

const DiagnosticPage = () => {
  const [instrument, setInstrument] = useState("");
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("1");
  const [genre, setGenre] = useState("");
  const [online, setOnline] = useState("");
  const [region, setRegion] = useState("");
  const [showRegion, setShowRegion] = useState(false);
  const [result, setResult] = useState(null);

  const handleOnlineChange = (value) => {
    setOnline(value);
    if (value === "Yes" || value === "どちらでも") {
      setShowRegion(true);
    } else {
      setShowRegion(false);
      setRegion("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 診断結果を設定
    setResult({
      楽器: instrument,
      目標: goal,
      レベル: level,
      ジャンル: genre,
      オンライン: online,
      地域: showRegion ? region : "N/A",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">診断ページ</h1>
        <form onSubmit={handleSubmit}>
          {/* 楽器 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="instrument">
              楽器<span className="text-red-500">*</span>
            </label>
            <select
              id="instrument"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">選択してください</option>
              <option value="ピアノ">ピアノ</option>
              <option value="バイオリン">バイオリン</option>
              <option value="チェロ">チェロ</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* 目標 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="goal">
              目標<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              placeholder="例: コンサートで演奏したい"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* レベル */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">レベル<span className="text-red-500">*</span></label>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex items-center">
                  <input
                    type="radio"
                    name="level"
                    value={num}
                    checked={level === num.toString()}
                    onChange={(e) => setLevel(e.target.value)}
                    required
                    className="mr-2"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>

          {/* ジャンル */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="genre">
              ジャンル<span className="text-red-500">*</span>
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">選択してください</option>
              <option value="POPS">POPS</option>
              <option value="ジャズ">ジャズ</option>
              <option value="クラシック">クラシック</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* オンライン */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">オンライン<span className="text-red-500">*</span></label>
            <div className="flex space-x-4">
              {["Yes", "No", "どちらでも"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="online"
                    value={option}
                    checked={online === option}
                    onChange={(e) => handleOnlineChange(e.target.value)}
                    required
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 地域選択（オンラインが Yes または どちらでもの場合） */}
          {showRegion && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="region">
                地域選択<span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">地域を選択してください</option>
                <option value="北海道">北海道</option>
                <option value="東京">東京</option>
                <option value="大阪">大阪</option>
                <option value="その他">その他</option>
              </select>
            </div>
          )}

          {/* 診断結果ボタン */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition-colors"
          >
            診断結果を表示
          </button>
        </form>

        {/* 診断結果の表示 */}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded">
            <h2 className="text-xl font-semibold mb-2">診断結果</h2>
            <ul className="list-disc list-inside">
              {Object.entries(result).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticPage;
