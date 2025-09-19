import React from "react";

export default function FormInput({ placeholder, value, onChange, error, Icon }) {
  return (
    <div className="">
      <label className="label flex items-center gap-2 text-base-content/70 mb-1">
        {Icon && <Icon />} {placeholder}
      </label>

      <div className="relative group">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 py-3 rounded-xl border transition-all duration-300 
            bg-base-100/70 backdrop-blur-md shadow-md hover:shadow-xl focus:shadow-2xl
            focus:outline-none focus:ring-2 focus:ring-primary focus:scale-105 
            ${error ? 'border-error' : 'border-base-content/30'}
          `}
        />
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-base-content/50 group-focus:text-primary transition-colors">
            <Icon />
          </div>
        )}
      </div>

      {error && <span className="label-text-alt text-error mt-1">{error}</span>}
    </div>
  );
}
