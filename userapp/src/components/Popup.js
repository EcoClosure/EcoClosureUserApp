import React from 'react';
// import './Popup.css';

const Popup = ({isActive, handleToggle, children}) => {
  return (
    <>
      <div className={`overlay ${isActive ? "active" : ""}`}></div>

      <div className={`popup ${isActive ? "active" : ""}`}>
        {children}
        <button onClick={handleToggle}>Close</button>
      </div>
    </>
  );
}

export default Popup;