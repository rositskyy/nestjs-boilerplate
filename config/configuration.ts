import { EnvironmentConfig } from './configuration.type';
import * as Joi from 'joi';

/**
 * Environment config
 * @example
 * const config = this.configService.get<EnvironmentConfig>('config');
 */
export const configuration = () => ({
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

export const configurationValidationSchema = Joi.object({
  MODE: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
  PORT: Joi.number().default(8288),
  DB_TYPE: Joi.string(),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_USERNAME: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_DATABASE: Joi.string(),
});
