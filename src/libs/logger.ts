import pino from 'pino';
import type { LoggerOptions } from 'pino';

const { NODE_ENV = 'development', LOG_LEVEL = 'info' } = process.env;

export const validLogLevels = [
  'fatal',
  'error',
  'warn',
  'info',
  'debug',
  'trace',
  'silent',
];

if (!validLogLevels.includes(LOG_LEVEL)) {
  throw new Error(
    `Invalid value for Environment Variable LOG_LEVEL: (${LOG_LEVEL})!`,
  );
}

const loggerOptionsByEnvironment: Record<string, LoggerOptions> = {
  development: {
    level: LOG_LEVEL,
    prettyPrint: {
      colorize: true,
      ignore: 'hostname,pid',
      translateTime: 'yyyy-mm-dd HH:MM:sso',
    },
  },
  staging: {
    level: LOG_LEVEL,
    prettyPrint: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:MM:sso',
    },
  },
  production: {
    level: LOG_LEVEL,
    prettyPrint: {
      colorize: true,
      translateTime: 'yyyy-mm-dd HH:MM:sso',
    },
  },
};

export const loggerOptions = loggerOptionsByEnvironment[NODE_ENV] ?? {
  level: LOG_LEVEL,
};

export const logger = pino(loggerOptions);

export default logger;
