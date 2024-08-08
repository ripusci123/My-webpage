// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];

  constructor(private mockDataService: MockDataService) {
    this.users = this.mockDataService.getValidUsers();
  }

  checkUserExistence(emailOrPhone: string): boolean {
    return this.users.some(user => user.emailOrPhone === emailOrPhone);
  }

  validatePassword(emailOrPhone: string, password: string): boolean {
    const user = this.users.find(user => user.emailOrPhone === emailOrPhone);
    return user ? user.password === password : false;
  }
}
