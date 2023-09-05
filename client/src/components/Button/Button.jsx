import React from 'react';
import './Button.scss';
import btnArrowImage from '../../img/btn-arrow.png';

function Button (props) {

  const { className, label, showCircleArrow = false, buttonType = 'button', onClick } = props;
  
  return (
    <button className={`btn ${className}`} type={buttonType} onClick={onClick}>
      {label}
      {showCircleArrow && (
        <div className="btn__circle">
          <img 
            className="btn__arrow" 
            src={btnArrowImage} 
            alt="arrow" />
        </div>
      )}
    </button>
  );
};

export default Button;