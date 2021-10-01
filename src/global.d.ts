type UserJWT = {
  userId: string;
};

declare namespace Express {
  interface Request {
    user: UserJWT;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MODE: string;
    DB_TYPE: 'mysql';
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    DB_TYPE: string;
  }
}
