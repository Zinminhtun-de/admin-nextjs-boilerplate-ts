'use client';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Icons } from '../icons';
import { cn } from '@/utils/cn';

const PhoneFieldArray: React.FC<any> = ({
  type = 'text',
  placeholder,
  name,
  label,
  required,
  validate,
  className,
}) => {
  const {
    register,
    control,
  } = useFormContext<any>();
  const { fields, append, remove } = useFieldArray<any>({
    name,
    control,
  });
  return (
    <div className={cn('w-full', className)}>
      <label id={name} className="block mb-1 text-sm text-gray-500">
        {label}
      </label>
      <div className="w-full">
        {fields.map((_, index: number) => (
          <div key={index}>
            <div key={index} className="flex items-center justify-center mb-2 gap-x-4">
              <input
                type={type}
                placeholder={placeholder}
                {...register(`${name}.${index}.value`, { required: required, validate: validate })}
                className="w-full px-2 py-2 text-sm border rounded-md focus:outline-none focus:ring-0"
              />

              {fields?.length === index + 1 && (
                <div
                  className="px-3 py-2 border border-gray-300 rounded cursor-pointer"
                  onClick={() => remove(index)}
                >
                  <Icons.minusCircle />
                </div>
              )}
            </div>

            {/* {errors.phone.message  && <ErrorMessage text={errors && errors.phone?.[index]?.value?.message || "" } />} */}
          </div>
        ))}

        <div className="mt-3">
          <span
            className=" items-center  justify-center border text-center py-2 border-[#197CC0] rounded-md cursor-pointer gap-x-2 bg-pink_lemonade flex "
            onClick={() => append({ value: ' ' })}
          >
            <Icons.addCircle />

            <span className="text-vermilion_bird text-[12px] font-bold text-[#197CC0]">
              Add Phone Number Field{' '}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhoneFieldArray;
