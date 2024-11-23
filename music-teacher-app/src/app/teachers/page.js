'use client';

import { useState } from 'react';
import TeacherCard from '../../components/TeacherCard';

// Sample Data
const teachersData = [
  {
    id: 1,
    photo: '/images/teacher1.jpg',
    name: '山田 太郎',
    background: '東京音楽大学卒業、ジャズピアニスト',
    experience: 5,
    age: 30,
    fee: 3000,
    online: true,
  },
  {
    id: 2,
    photo: '/images/teacher2.jpg',
    name: '佐藤 花子',
    background: '名古屋音楽院卒業、クラシックバイオリニスト',
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
        </div>
      )}
    </div>
  );
};

export default TeachersPage;
