"use client";

import { useState } from "react";
import TeacherCard from "../../components/TeacherCard";
import Link from "next/link";

// Sample Data
const teachersData = [
  {
    id: 1,
    photo: "/images/Taro.png",
    name: "山田 太郎",
    background: "東京音楽大学卒業、ジャズピアニスト",
    experience: 5,
    age: 30,
    fee: 3000,
    online: true,
  },
  {
    id: 2,
    photo: "/images/Hanako.png",
    name: "佐藤 花子",
    background: "名古屋音楽院卒業、クラシックバイオリニスト",
    experience: 8,
    age: 35,
    fee: 3500,
    online: false,
  },
  // Add more teacher objects as needed
];

const TeachersPage = () => {
  const [selectedTeachers, setSelectedTeachers] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const handleMatchConfirmation = () => {
    setIsMatched(true);

    // ここでサーバー側に選択された先生データを送信する処理を追加することも可能です。
    console.log("Selected Teachers:", selectedTeachers);
  };

  const handleSelect = (teacherId) => {
    setSelectedTeachers((prevSelected) =>
      prevSelected.includes(teacherId)
        ? prevSelected.filter((id) => id !== teacherId)
        : [...prevSelected, teacherId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">先生一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachersData.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            photo={teacher.photo}
            name={teacher.name}
            background={teacher.background}
            experience={teacher.experience}
            age={teacher.age}
            fee={teacher.fee}
            online={teacher.online}
            onSelect={() => handleSelect(teacher.id)}
          />
        ))}
      </div>

      {/* Selected Teachers Section */}
      {selectedTeachers.length > 0 && (
        <div className="mt-8 p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">選択された先生</h2>
          <ul className="list-disc list-inside">
            {teachersData
              .filter((teacher) => selectedTeachers.includes(teacher.id))
              .map((teacher) => (
                <li key={teacher.id}>{teacher.name}</li>
              ))}
          </ul>

          {/* マッチングを成立させるボタン */}
          <Link
            href="/matchingdone"
            className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors text-center block"
          >
            マッチングを成立させる
          </Link>
        </div>
      )}
    </div>
  );
};

export default TeachersPage;
