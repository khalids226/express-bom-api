
import expressPino from 'pino-http';
import { Request } from 'express';
import { loggerOptions } from '../libs/logger';

type RawRequest = Omit<Request, 'query'> & {
  raw: { body: string; query: string };
  connection: Record<string, string>;
  query: string;
};

type SerializedReq = Partial<RawRequest>;

export const requestLoggerMiddlware = expressPino({
  level: loggerOptions.level,
  prettyPrint: loggerOptions.prettyPrint,
  serializers: {
    req(req: RawRequest): SerializedReq {
      req.body = req.raw.body;
      req.query = req.raw.query;
      return req;
    },
  },
  redact: {
    paths: [
      'req.headers',
      'res.headers',
      'req.remoteAddress',
      'req.remotePort',
    ],
    remove: true,
  },
});
