import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

const RTextField: React.FC<{
  name: string;
  type: string;
  placeholder: string;
  label: string;
  required: string;
  validate?: any;
  value?: string;
  disabled?: boolean;
}> = ({ name, type, placeholder, label, required, validate, disabled, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message;
  return (
    <div className="w-full">
      <label id={name} className="block mb-1 text-sm text-gray-500">
        {label}
      </label>
      <div>
        <input
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          {...register(name, { required: required, validate: validate })}
          {...rest}
          className="w-full px-2 py-2 text-sm border rounded-md focus:outline-none focus:ring-0"
        />
        {error && <ErrorMessage text={error as string} />}
      </div>
    </div>
  );
};

export default RTextField;
