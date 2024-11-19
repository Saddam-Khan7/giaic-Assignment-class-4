import React from "react";

interface StudentProps {
  name: string;
  age: number;
  rollNo: number;
  studentClass: string;
}

const StudentCard = (props: StudentProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 max-w-md mx-auto hover:cursor-pointer">
      <div className="bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
          Student Card
        </h1>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v3m0 0v3m0-3h3m-3 0H9m12-3.75v4.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.25V12m9-7.5v4.5"
              />
            </svg>
          </div>
          <p className="ml-4 text-lg font-semibold text-gray-700">
            <span className="text-purple-600">Name:</span> {props.name}
          </p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12v-2a4 4 0 00-8 0v2m-1 0a5 5 0 1110 0m-5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 0v-2m0 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </div>
          <p className="ml-4 text-lg font-semibold text-gray-700">
            <span className="text-blue-600">Age:</span> {props.age}
          </p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v3m0 0v3m0-3h3m-3 0H9m12-3.75v4.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 16.25V12m9-7.5v4.5"
              />
            </svg>
          </div>
          <p className="ml-4 text-lg font-semibold text-gray-700">
            <span className="text-pink-600">Roll No:</span> {props.rollNo}
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 text-white rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12v-2a4 4 0 00-8 0v2m-1 0a5 5 0 1110 0m-5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 0v-2m0 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </div>
          <p className="ml-4 text-lg font-semibold text-gray-700">
            <span className="text-yellow-600">Class:</span> {props.studentClass}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
