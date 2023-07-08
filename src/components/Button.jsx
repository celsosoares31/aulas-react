import React from 'react';

const Button = ({ text, icon, link, isReversed, isLogoutBtn }) => {
  return (
    <button
      className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} ${
        isLogoutBtn ? 'bg-red-700 text-white h-5 text-xs rounded-md p-3' : ''
      } items-center justify-between p-2 text-base`}>
      {text}
      <span className='m-2'>{icon}</span>
    </button>
  );
};

export default Button;
