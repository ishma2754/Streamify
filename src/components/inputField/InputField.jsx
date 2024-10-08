
import React from 'react';

const InputField = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
