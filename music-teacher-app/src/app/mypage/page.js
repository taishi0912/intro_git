"use client";

import Link from "next/link";

const MyPage = () => {
  const userName = "山田太郎"; // 例としての名前
  const userBirthDate = "1990年1月1日"; // 例としての生年月日
  const userImage = "/images/Taro.png"; // ユーザーの画像URL
  const matchingHistory = [
    {
      date: "2024年10月01日",
      result: "マッチング成功",
      photo: "/images/Taro.png",
      name: "山田 太郎",
      background: "東京音楽大学卒業、ジャズピアニスト",
      experience: 5,
      age: 30,
      fee: 3000,
      online: true,
    },
    {
      date: "2024年09月15日",
      result: "マッチング成功",
      photo: "/images/Taro.png",
      name: "田中",
      background: "東京音楽大学卒業、ジャズピアニスト",
      experience: 5,
      age: 30,
      fee: 3000,
      online: true,
    },
    {
      date: "2024年08月30日",
      result: "マッチング成功",
      photo: "/images/Taro.png",
      name: "山田 太郎",
      background: "東京音楽大学卒業、ジャズピアニスト",
      experience: 5,
      age: 30,
      fee: 3000,
      online: true,
    },
  ];


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">マイページ</h1>

        <div className="mb-4 text-center">
          <img
            src={userImage}
            alt="/images/Taro.png"
            className="w-32 h-32 rounded-full mx-auto mb-4" // 画像を円形にするスタイル
          />
          <h2 className="text-lg font-semibold">ユーザー情報</h2>
          <p><strong>名前:</strong> {userName}</p>
          <p><strong>生年月日:</strong> {userBirthDate}</p>
        </div>

        <div className="mb-4 text-center">
          <Link href="/shindan">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              マッチング診断に進む
            </button>
          </Link>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">マッチング履歴</h2>
          <ul className="list-disc ml-5">
            {matchingHistory.map((entry, index) => (
              <li key={index}>
                {entry.date}: 
                {entry.result}:
                {entry.background}:
                {entry.experience}:
                {entry.age}:
                {entry.fee}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;