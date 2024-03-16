import { RoutingControllersOptions } from "routing-controllers";
import { Environments } from "./environments";
import path from 'path';

export namespace Server {
    export const Port = Environments.PORT;
    export const Settings: RoutingControllersOptions = {
        defaultErrorHandler: false,
        controllers: [path.join(__dirname, "/../controllers/**/*.ts")],
        middlewares: [path.join(__dirname, "/../middlewares/**/*.ts")],
        cors: true
    };
}