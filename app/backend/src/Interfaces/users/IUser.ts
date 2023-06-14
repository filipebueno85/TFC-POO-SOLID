import { Identifiable } from '..';

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserCreate extends Identifiable {
  username: string,
  email: string,
  role: string,
  password: string
}

export interface IUser extends Identifiable, ILogin {
  email: string,
  role: string,
}

export type IUserResponse = Omit<IUser, 'password'>;
export type IUserCreateResponse = Omit<IUserCreate, 'password'>;
