import React from "react";

const Input = ({ value, placeholder, label, type, refer }) => {
  return (
    <div>
      <label className="text-white">{label}</label>
      <input
        ref={refer}
        type={type}
        className="w-full p-4 mt-2 text-white bg-black border rounded-md opacity-45 h-14 text-start"
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
