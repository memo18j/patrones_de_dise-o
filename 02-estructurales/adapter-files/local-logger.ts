import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LocalLogger Class
export class LocalLogger {
  constructor(private readonly file: string) {}

  writeLog(message: string): void {
    console.log(`[${this.file} LOG]: ${message}`);
  }

  writeError(message: string): void {
    console.error(`[${this.file} ERROR]: %c${message}`, COLORS.red);
  }

  writeWarn(message: string): void {
    console.warn(`[${this.file} WARN]: %c${message}`, COLORS.yellow);
  }
}
