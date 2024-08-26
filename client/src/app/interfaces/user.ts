export interface User {
  // _id: User | null;
  _id: string;
  username: string;
  isAdmin: boolean;
  token: string;
}
