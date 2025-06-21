import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:7000/api/users';

  constructor(private http: HttpClient) {}

  addUser(user: { employeeId:string; fullName: string; email: string; phoneNumber: string}) {
    
    return this.http.post(this.baseUrl, user);
  }
}
