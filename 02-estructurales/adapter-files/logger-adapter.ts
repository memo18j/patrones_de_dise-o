import { Logger } from "@deno-library/logger";
import { COLORS } from "../../helpers/colors.ts";

interface ILogger {
  file: string;
  writeLog(message: string): void;
  writeError(message: string): void;
  writeWarn(message: string): void;
}

export class LoggerAdapter implements ILogger {
  private readonly logger = new Logger();

  constructor(public file: string) {}

  writeLog(message: string): void {
    this.logger.info(`[${this.file} LOG]: ${message}`);
  }

  writeError(message: string): void {
    this.logger.error(`[${this.file} ERROR]: %c${message}`, COLORS.red);
  }

  writeWarn(message: string): void {
    this.logger.warn(`[${this.file} WARN]: %c${message}`, COLORS.yellow);
  }
}
