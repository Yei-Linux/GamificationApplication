import * as winston from 'winston'
import { injectable } from 'inversify';

@injectable()
export class Logger {
  private _logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console(),
    ]
  });

  debug(message: string, ...meta: any[]) {
    this._logger.debug(message, meta);
  }

  warn(message: string, ...meta: any[]) {
    this._logger.warn(message, meta);
  }

  error(error: Error) {
    this._logger.error(error.message, error.stack);
  }

  info(message: string, ...meta: any[]) {
    this._logger.info(message, meta);
  }
}