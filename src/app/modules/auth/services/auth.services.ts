import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInFlag = false;

  constructor() {}

  login(username: string, password: string): boolean {
    // Perform actual authentication logic here (e.g., check username and password against a database)
    if (username === 'admin' && password === 'password') {
      this.isLoggedInFlag = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInFlag = false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }
}
