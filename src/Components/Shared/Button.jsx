import React from "react";

const Button = ({ text, bgcolor, color, id, handleActive }) => {
  return (
    <div>
      <button
        className={`w-56 text-center py-2 rounded-full text-xl ${color} ${bgcolor} mx-auto mt-12 shadow-md shadow-gray-500`}
        onClick={() => handleActive(id)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
