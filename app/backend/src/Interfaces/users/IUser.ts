import { Identifiable } from '..';

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser extends Identifiable, ILogin {
  email: string
}

export type IUserResponse = Omit<IUser, 'password'>;
