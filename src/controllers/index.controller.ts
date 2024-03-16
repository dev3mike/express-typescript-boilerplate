import { SampleMiddleware } from "@middlewares/sample.middleware";
import { SampleService } from "@services/sample.service";
import { Controller, Get, Param, UseBefore } from "routing-controllers";
import { z } from "zod";

@Controller("/")
@UseBefore(SampleMiddleware)
export class SampleController {
    @Get("/")
    public async home() {
        return { message: "Hello, this is your API" };
    }
}