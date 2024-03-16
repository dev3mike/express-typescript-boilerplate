import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import { z } from 'zod';

@Middleware({ type: 'after' })
export class HttpErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: (err: any) => any) {
        if (error instanceof HttpError) {
            response.status(error.httpCode).json(error);
        }

        if (error instanceof z.ZodError) {
            response.status(400).json({
                "message": "invalid input",
                "errors": error.issues.map(i => i.path + ':' + i.message)
            });
        }

        next(error);
    }
}