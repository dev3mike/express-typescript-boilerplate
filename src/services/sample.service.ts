export namespace SampleService {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    export async function sampleService() {
        await sleep(100);
        return "This is from the sample service"
    }
}