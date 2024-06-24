export interface dataFormResgister {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: 0 | null;
}
export interface dataFormLogin {
  username: string;
  password: string;
  remember: boolean;
}
