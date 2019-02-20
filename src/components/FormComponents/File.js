import React from 'react';


const File = ({ title, name, type, inputRef, required = false }) => {
  return (
    <div className="file-field input-field">
      <div className="btn">
        <label htmlFor={name}>{title}</label>
        <input id={name}
          name={name}
          type={type}
          ref={inputRef}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
  );
}

export default File; 