import { Logger } from "@configuration";
import { ExpressMiddlewareInterface } from "routing-controllers";

export class SampleMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: (err?: any) => any) {
        Logger.info("This is from middel ware");
        next();
    }
}