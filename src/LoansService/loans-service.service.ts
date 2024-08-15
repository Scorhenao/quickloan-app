import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
  calculateLoanRisk(userProfile: any): string {
    // Lógica básica para determinar el riesgo
    if (userProfile.creditScore > 700) {
      return 'Low Risk';
    } else {
      return 'High Risk';
    }
  }
}

@Post()
createLoan(@Body() createLoanDto: any) {
  return `Loan created for ${createLoanDto.userId}`;
}
```

- Implementar un `ValidationPipe` para validar los datos de entrada:
```typescript
import { ValidationPipe } from '@nestjs/common';

// En main.ts
app.useGlobalPipes(new ValidationPipe());