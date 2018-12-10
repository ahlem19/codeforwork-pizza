export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password?: string;
  adress?: string;
  city?: string;
  country?: string;
  avatar_url?: string;
  role: string;
  token?: string;
}
