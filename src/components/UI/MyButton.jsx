import React from 'react';

const MyButton = ({ name, handleClick, className, props, replaceClasses }) => {
  return (
    <button
      className={
        replaceClasses
          ? replaceClasses
          : 'p-2 self-center rounded-md px-4 hover:shadow-md transition-all duration-150 text-xs border-2  text-blue-600 focus:outline-none focus:ring focus:ring-gray-400' +
            ' ' +
            className
      }
      onClick={handleClick ? handleClick : () => {}}
      {...props}
    >
      {name}
    </button>
  );
};

export default MyButton;
