export interface LoginSubmitData {
  email: string;
  password: string;
}

export interface SignupSubmitData {
  email: string;
  password: string;
  nickname: string;
  name: string;
  phone: string;
  password_check?: string;
  phone_number?: number;
}

export interface UserLoginReturnData {
  nickname: string;
  profileImageUrl: string;
  token: string;
}

export interface MyPageEditSubmitData {
  information: string;
  isActivated: string | boolean;
  nickname: string;
  phone: string;
  preferredMethod: string;
  region: string;
  skills: string[];
}
