import { SampleMiddleware } from "@middlewares/sample.middleware";
import { SampleService } from "@services/sample.service";
import { Controller, Get, Param, UseBefore } from "routing-controllers";
import { z } from "zod";

@Controller("/sample")
@UseBefore(SampleMiddleware)
export class SampleController {
    @Get("/")
    public async home() {
        const sampleService = await SampleService.sampleService();
        return { message: "Hello", serviceResponse: sampleService };
    }

    @Get("/:name")
    public helloPerson(@Param("name") name: string) {
        const nameValue = z
            .string()
            .min(2)
            .max(10);

        return { message: `Hello ${nameValue}` };
    }
}