'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

const TeacherCard = ({
  photo,
  name,
  background,
  experience,
  age,
  fee,
  online,
  onSelect,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
      {/* Photo */}
      <div className="flex justify-center mb-4">
        <Image
          src={photo}
          alt={`${name}の写真`}
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-center mb-2">{name}</h2>

      {/* Background */}
      <p className="text-gray-600 mb-2"><strong>経歴:</strong> {background}</p>

      {/* Teaching Experience */}
      <p className="text-gray-600 mb-2"><strong>指導経験:</strong> {experience}年</p>

      {/* Age */}
      <p className="text-gray-600 mb-2"><strong>年齢:</strong> {age}歳</p>

      {/* Fee */}
      <p className="text-gray-600 mb-2"><strong>料金:</strong> {fee}円/時間</p>

      {/* Online Availability */}
      <p className="text-gray-600 mb-4">
        <strong>オンライン可:</strong> {online ? 'はい' : 'いいえ'}
      </p>

      {/* Select Button */}
      <button
        onClick={onSelect}
        className="mt-auto bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors"
      >
        選択
      </button>
    </div>
  );
};

TeacherCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  online: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TeacherCard;
