/**
 * Environment config
 * @example
 * const config = this.configService.get<EnvironmentConfig>('config');
 */
export default () => ({
  config: {
    port: parseInt(process.env.PORT, 10) || 8288,
    mode: process.env.MODE,
  },
});
