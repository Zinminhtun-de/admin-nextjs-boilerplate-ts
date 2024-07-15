'use client';
import React, {  useTransition } from 'react';


import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import RTextField from '@/components/ui/text-field/RTextField';
import { validateEmail, validatePassword } from '@/utils/validation-rule';
import RPasswordTextField from '@/components/ui/text-field/RPasswordTextField';
import { cn } from '@/utils/cn';
import Loading from '@/components/ui/loading/Loading';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useSessionLogin } from '@/lib/session';

export default function Login() {

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
 

  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const methods = useForm();

  const [isPending, startTransition] = useTransition();
  const { trigger: triggerSessionLogin } = useSessionLogin();

  const onSubmit = async () => {
    setIsLoading(true);
  startTransition(async () => {
      await triggerSessionLogin({ ...{}, tokenExpired: 1 });
      setIsLoading(false);

      router.push(`/${currentLocale}`);

      methods.reset();
    });
    
  };

  return (
    <div className="  bg-[#E0F2FE]  h-screen">
      <div className="lg:bg-[#F0F9FF]  overflow-auto h-full pt-10 pb-10 md:pt-20 md:pb-20">
        <div className="flex flex-col justify-center  mx-auto bg-white rounded-lg lg:px-10  lg:shadow-sm w-[95%] px-4 md:px-0 md:w-[35%] py-10">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src={'/next.svg'} alt="" width={40} height={40} />
                </div>
                <h1 className="text-lg lg:text-lg font-normal leading-9 text-[#101828] py-5">
                  Welcome Back!
                </h1>
              </div>
              <div className="flex flex-col py-2 gap-y-4">
                <RTextField
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
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
               
              </div>
              <button
                type="submit"
                className={cn(
                  'flex justify-center w-full text-center bg-[#197CC0] rounded-lg mt-3 py-2 text-base font-semibold text-white',

                  (isLoading || isPending) && 'opacity-40 pointer-events-none'
                )}
              >
                {isLoading || isPending ? <Loading /> : 'Log In'}
              </button>
            </form>
          </FormProvider>

       
        </div>
      </div>
    </div>
  );
}
