// Import necessary tools for testing from NestJS
import { Test, TestingModule } from '@nestjs/testing';
// Import the controller and service to test
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Define a test suite for the AppController
describe('AppController', () => {
  let appController: AppController;

  // Setup before each test runs
  beforeEach(async () => {
    // Create a testing module with AppController and AppService
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Get an instance of AppController from the testing module
    appController = app.get<AppController>(AppController);
  });

  // Define a group of tests for the 'root' functionality
  describe('root', () => {
    // Define a test to check if getHello() returns the correct message
    it('should return "Hello World!"', () => {
      // Check if getHello() returns 'Hello World!'
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
