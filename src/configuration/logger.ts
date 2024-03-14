import winston from 'winston';

const consoleTransport = new winston.transports.Console();

export const Logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
        }
        )),
    transports: [
        consoleTransport
    ]
});