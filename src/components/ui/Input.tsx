import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all ${error ? 'border-red-500' : 'border-white/30'} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-300">{error}</p>}
    </div>
  );
};