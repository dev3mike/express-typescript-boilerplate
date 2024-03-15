import { SampleMiddleware } from "@middlewares/sample.middleware";
import { SampleService } from "@services/sample.service";
import { Controller, Get, Param, UseBefore } from "routing-controllers";

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
        return { message: `Hello ${name}` };
    }
}