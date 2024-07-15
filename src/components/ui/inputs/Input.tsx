"use client"
import { cn } from '@/utils/cn';
import { HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import React from 'react';
import MButton from '../muibutton';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  className?: string;
  id?: string;
  flexRowReverse?: boolean;
  icon?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, name, id, className, flexRowReverse = false, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(true);

    const handlePassword = () => setShowPassword((prev) => !prev);
    return (
      <div
        className={cn(
          'flex items-center rounded border px-2 w-full',
          flexRowReverse && 'flex-row-reverse'
        )}
      >
        <input
          type={type === 'password' ? (!showPassword ? 'text' : 'password') : type ?? 'text'}
          name={name}
          id={id}
          ref={ref}
          placeholder={placeholder}
          className={cn(
            'flex-1 py-2 outline-none ps-2 placeholder:capitalize placeholder:text-gray_500 text-md',
            className
          )}
          {...props}
        />

        {icon}
        {type === 'password' && (
          <MButton
            onClick={handlePassword}
            className="border-none rounded-full text-lg p-1 bg-gray-50 hover:bg-gray-100/45 w-8 h-8 flex justify-center items-center hover:text-black"
          >
            {/* {showPassword ? <Icons.eyeClose /> : <Icons.eyeOpen />} */}
            {showPassword ? 1 : 2}
          </MButton>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
