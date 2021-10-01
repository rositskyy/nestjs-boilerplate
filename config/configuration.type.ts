export interface EnvironmentConfig {
  readonly mode: string;
  readonly port: number;
  readonly db: {
    readonly type: string;
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
    readonly database: string;
  };
}
