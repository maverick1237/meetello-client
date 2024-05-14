/* eslint-disable react/prop-types */
import React from 'react'

const TodoContainer = ({  children, className=""}) => {
    return (
        <div className={`${className}  flex items-center bg-opacity-30  border-2  rounded-xl justify-center p-2 mt-2` } >
          {children}
        </div>
    );
};

export default TodoContainer