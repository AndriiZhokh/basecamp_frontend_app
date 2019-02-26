import React from 'react';

const Input = ({ title, name, type, value, handleChange, required = false }) => {
  return (
    <label >{title}
      <input 
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        required = {required} />
    </label>
  );
}

export default Input;