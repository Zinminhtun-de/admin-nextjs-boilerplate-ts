'use client';
import React, { useTransition } from 'react';


import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import RTextField from '@/components/ui/text-field/RTextField';
import { validateConfirmPassword, validateEmail, validatePassword } from '@/utils/validation-rule';
import RPasswordTextField from '@/components/ui/text-field/RPasswordTextField';
import { cn } from '@/utils/cn';
import Loading from '@/components/ui/loading/Loading';





export default function Register() {


  const [isLoading, setIsLoading] = React.useState(false);
  const methods = useForm();


  const [isPending, ] = useTransition();

  const onSubmit = async () => {
    setIsLoading(true);



  };

  return (
    <div className="  bg-[#E0F2FE]  h-screen">
      <div className="lg:bg-[#F0F9FF]  overflow-auto h-full pt-10 pb-10 md:pt-20 md:pb-20">
        {' '}
        <div className="flex flex-col justify-center  mx-auto bg-white rounded-lg py-6 md:py-0 lg:px-10 lg:py-10 lg:shadow-sm w-[95%] px-4 md:w-[35%]">
          <FormProvider {...methods}>
            {/* <DevTool control={methods.control} /> */}
            <form onSubmit={methods.handleSubmit(onSubmit)} className="">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src={'/next.svg'} alt="" width={40} height={40} />
                </div>
                <h1 className="text-md lg:text-lg  font-normal leading-9 text-[#101828] py-5">
                  Create an account
                </h1>
              </div>
              <div className="flex flex-col py-2 gap-y-4">
                <RTextField
                  type="text"
                  label="User Name"
                  placeholder="Enter User Name"
                  name="username"
                  required="Username is required."
                />
                <RTextField
                  type="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  name="email"
                  required="Email is required."
                  validate={validateEmail}
                />

                <RPasswordTextField
                  label="Password"
                  placeholder="Enter password"
                  name="password"
                  required="Password is required."
                  validate={validatePassword}
                />
                <RPasswordTextField
                  label="Confirm Password"
                  placeholder="Enter Confirm Password"
                  name="confirm_password"
                  required="Confirm Password is required."
                  validate={validateConfirmPassword}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  'flex justify-center w-full text-center bg-[#197CC0] rounded-lg mt-3 py-3 text-base font-semibold text-white',

                  (isLoading || isPending) && 'opacity-40 pointer-events-none'
                )}
              >
                {isLoading || isPending ? <Loading /> : 'Create account'}
              </button>
            </form>
          </FormProvider>

         
        </div>
      </div>
    </div>
  );
}
