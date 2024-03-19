import { TestCronJobName } from "@cronjobs/sample.cron";
import { SampleMiddleware } from "@middlewares/sample.middleware";
import { startCron } from "cron-decorators";
import { Controller, Get, UseBefore } from "routing-controllers";

@Controller("/")
@UseBefore(SampleMiddleware)
export class SampleController {
    @Get("/")
    public async home() {
        // startCron(TestCronJobName);
        return { message: "Hello, this is your API" };
    }
}