import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="">
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`w-full px-4 py-2 ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="text-red-600">{errors}</div>}
    </div>
  );
};
