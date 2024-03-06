import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full mb-4">
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`block w-full px-4 py-2 rounded-md bg-white text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
