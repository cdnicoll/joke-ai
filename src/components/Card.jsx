import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-md font-bold mb-4 pb-2 border-b border-gray-300">Card Title</h2>
        <p className="text-gray-700 text-sm">This is some card content.</p>
      </div>
    </div>
  );
};

export default Card;