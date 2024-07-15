import axios from 'axios';
import useSWRMutation from 'swr/mutation';

export const useMutationRegister = () =>
  useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/register`,
    (
      url,
      {
        arg,
      }: {
        arg: {
          name: string;
          email: string;
          password: string;
          password_confirmation: string;
          request_id: string;
          code: string;
        };
      }
    ) => {
      return axios.post<any>(url, arg);
    }
  );
export const useMutationLogin = () =>
  useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
    (
      url,
      {
        arg,
      }: {
        arg: {
          email: string;
          password: string;
        };
      }
    ) => {
      return axios.post<any>(url, arg);
    }
  );
