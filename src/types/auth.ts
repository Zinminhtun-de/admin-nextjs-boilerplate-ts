export interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserInfoData {
  user: User;
  token: string;
  permissions: string[];
  user_type: string;
}

export interface LoginResponse {
  status: string;
  msg: string;
  data: UserInfoData;
}
