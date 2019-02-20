import React from 'react';

const Textarea = ({ title, name, value, handleChange, required = false }) => {
  return (
    <label >{title}
      <textarea 
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required = {required} />
    </label>
  );
}

export default Textarea;