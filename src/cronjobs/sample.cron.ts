import { CronController, Cron } from "cron-decorators";
@CronController()
export class TestCronjobs {
    /**
     * To make this working, uncomment the cronjob setup in index.ts
     */
    @Cron("sampleCronJob", "* * * * * *")
    public async sampleCronJob(): Promise<void> {
        console.log("I am a cron Job and I just ran!");
    }
}