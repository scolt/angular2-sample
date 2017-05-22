export interface UserProfile {
  first: string;
  last: string;
}

export interface UserModel {
  userProfile?: UserProfile,
  loggedIn: boolean,
  err?: string
}
