import { Handler, ErrorRequestHandler } from "express";
import logger from "../libs/logger";

export const notFoundHandler: Handler = (_req, res) => {
  res.status(404).json({
    message: "path not found"
  })
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err);
  res.status(500).json({
    message: 'Internal Server Error'
  })
}