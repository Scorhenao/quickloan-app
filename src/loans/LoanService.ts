// Import the Injectable decorator from NestJS
import { Injectable } from '@nestjs/common';

// This line tells NestJS that this class is a service that can be injected into other classes
@Injectable()
export class LoansService {
  // This function calculates the risk of a loan based on the user's profile
  calculateLoanRisk(userProfile: any): string {
    // Simple logic to determine risk level
    // Check if the user's credit score is greater than 700
    if (userProfile.creditScore > 700) {
      // If yes, return 'Low Risk'
      return 'Low Risk';
    } else {
      // If no, return 'High Risk'
      return 'High Risk';
    }
  }
}
