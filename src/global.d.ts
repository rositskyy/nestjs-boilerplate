type UserJWT = {
  userId: string;
};

declare namespace Express {
  interface Request {
    user: UserJWT;
  }
}
