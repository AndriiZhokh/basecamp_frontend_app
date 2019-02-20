import React from 'react';

const Select = ({ title, name, className, value, handleChange, options, required = false }) => {
  return (
    <label>{title}
      <select 
        className = {className} 
        name = {name} 
        value = {value} 
        onChange = {handleChange}>
          {options.map(option => {
            return (
              <option
                key = {option}
                value = {option}
                label = {option}>{option}
              </option>
            );
          })}
      </select>
    </label>
  );
}

export default Select;