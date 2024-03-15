import { SampleService } from '@services/sample.service';
describe('Sample test case', () => {
    test('Verify sample service is returning response', async () => {
        // Arrange
        const sampleService = SampleService;

        // Act
        const response = await sampleService.sampleService();

        // Assert
        expect(response).toBe("This is from the sample service");
    });
});