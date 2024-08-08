// src/app/services/mock-data.service.ts
import { Injectable } from '@angular/core';
import { MockResponse } from '../models/mock-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockResponse: MockResponse = {
    validUsers: [
      { emailOrPhone: 'test@example.com', password: 'password123' },
      { emailOrPhone: '1234567890', password: 'password456' }
    ],
    allowedOrganizations: ['Org1', 'Org2', 'Org3']
  };

  getValidUsers(): User[] {
    return this.mockResponse.validUsers;
  }

  getAllowedOrganizations(): string[] {
    return this.mockResponse.allowedOrganizations;
  }
}
