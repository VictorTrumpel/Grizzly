import { Roles } from './enums'

export type ArtistModel = {
  id: number;
  email: string;
  password: string;
  nickname: string;
  avatar: string;
  role: Roles.User | Roles.Admin
}