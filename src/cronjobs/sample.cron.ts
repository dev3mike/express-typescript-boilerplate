import { CronController, Cron } from "cron-decorators";

export const TestCronJobName = "test";

@CronController(TestCronJobName)
export class TestCronjobs {
    @Cron("sec", "* * * * * *")
    public async secCronJob(): Promise<void> {
        console.log("I am cron Job and I just ran!");
    }
}