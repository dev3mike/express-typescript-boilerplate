import { SampleMiddleware } from "@middlewares/sample.middleware";
import { Controller, Get, Param, UseBefore } from "routing-controllers";

@Controller("/sample")
@UseBefore(SampleMiddleware)
export class SampleController {
    @Get("/")
    public home() {
        return { message: "Hello" };
    }

    @Get("/:name")
    public helloPerson(@Param("name") name: string) {
        return { message: `Hello ${name}` };
    }
}