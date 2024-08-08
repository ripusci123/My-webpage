// src/app/models/user.ts
export interface User {
  emailOrPhone: string;
  password?: string;
  name?: string;
  organizationName?: string;
  designation?: string;
  birthDate?: Date;
  city?: string;
  pincode?: string;
}

// src/app/models/mock-response.ts
export interface MockResponse {
  validUsers: User[];
  allowedOrganizations: string[];
}
