import { Component } from '@angular/core';
import { UserService } from './user.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  employeeId = '';
  fullName = '';
  email = '';
  phoneNumber = '';

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.addUser({ employeeId : this.employeeId, fullName: this.fullName, email: this.email,phoneNumber:this.phoneNumber }).subscribe((response: any) => {
      console.log('User added:', response);
    });
  }
  
}
