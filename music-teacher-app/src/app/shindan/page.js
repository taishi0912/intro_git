"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DiagnosticPage = () => {
  const router = useRouter();
  const [instrument, setInstrument] = useState("");
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("1");
  const [genre, setGenre] = useState("");
  const [online, setOnline] = useState("");
  const [region, setRegion] = useState("");
  const [showRegion, setShowRegion] = useState(false);
  const [otherInstrument, setOtherInstrument] = useState("");
  const [teacher, setTeacher] = useState(""); // 先生の選択用のstateを追加

  const handleOnlineChange = (value) => {
    setOnline(value);
    if (value !== "Yes") {
      setShowRegion(true);
    } else {
      setShowRegion(false);
      setRegion("");
    }
  };

  // 先生が選択されたときに遷移
  useEffect(() => {
    if (teacher) {
      router.push("/learning-plan"); // 学習プランの画面に遷移
    }
  }, [teacher, router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">診断ページ</h1>
        <form>
          {/* 楽器 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="instrument">
              楽器<span className="text-red-500"></span>
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
            {instrument === "その他" && (
              <input
                type="text"
                placeholder="具体的に入力してください"
                value={otherInstrument}
                onChange={(e) => setOtherInstrument(e.target.value)}
                required
                className="w-full border border-gray-300 p-2 rounded mt-2"
              />
            )}
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
            <label className="block text-gray-700 mb-2">
              レベル<span className="text-red-500">*</span>
            </label>
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
            <label className="block text-gray-700 mb-2">
              オンライン<span className="text-red-500">*</span>
            </label>
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

          {/* 先生選択 */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="teacher">
              先生選択<span className="text-red-500">*</span>
            </label>
            <select
              id="teacher"
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)} // 先生が選択された際にstateを更新
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">選択してください</option>
              <option value="先生1">先生1</option>
              <option value="先生2">先生2</option>
              <option value="先生3">先生3</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiagnosticPage;