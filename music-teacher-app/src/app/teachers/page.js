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
  const handleSelect = (teacherId) => {
    setSelectedTeachers((prevSelected) =>
      prevSelected.includes(teacherId)
        ? prevSelected.filter((id) => id !== teacherId)
        : [...prevSelected, teacherId]
    );
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        <span className="text-pink-500">先生一覧</span>
      </h1>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachersData.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="w-full h-[300px] overflow-hidden">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {teacher.name}
              </h2>
              <p className="text-gray-600 text-sm mb-1">{teacher.background}</p>
              <p className="text-gray-600 text-sm mb-1">
                経験: {teacher.experience}年
              </p>
              <p className="text-gray-600 text-sm mb-1">年齢: {teacher.age}歳</p>
              <p className="text-gray-600 text-sm mb-4">料金: ¥{teacher.fee}</p>
              <button
                onClick={() => handleSelect(teacher.id)}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  selectedTeachers.includes(teacher.id)
                    ? "bg-pink-400 text-white hover:bg-pink-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {selectedTeachers.includes(teacher.id)
                  ? "選択解除"
                  : "この先生を選択"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Teachers Section */}
      {selectedTeachers.length > 0 && (
        <div className="mt-12 bg-pink-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            選択された先生
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {teachersData
              .filter((teacher) => selectedTeachers.includes(teacher.id))
              .map((teacher) => (
                <li key={teacher.id}>{teacher.name}</li>
              ))}
          </ul>

          {/* Matching Button */}
          <div className="flex justify-center mt-6">
            <Link
              href="/matchingdone"
              className="bg-pink-500 text-white text-center py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors shadow-md"
            >
              マッチングを成立させる
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersPage;
