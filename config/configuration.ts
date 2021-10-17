import { EnvironmentConfig } from './configuration.type';

/**
 * Environment config
 * @example
 * const config = this.configService.get<EnvironmentConfig>('config');
 */
export default () => ({
  config: {
    port: parseInt(process.env.PORT, 10) || 8288,
    mode: process.env.MODE,
    db: {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  } as EnvironmentConfig,
});
