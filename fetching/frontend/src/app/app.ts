import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgFor,NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  providers: [
    
  ],
  imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  /*template: `
    <h2>Employee List</h2>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.employeId }} - {{ emp.fullName }} - {{ emp.email }} - {{ emp.phoneNumber }}
      </li>
    </ul>
  `*/
})
export class App implements OnInit{
  protected title = 'fetch-emp';
  employees: any[] = [];
  protected hovered: string | null = null;
  //protected hovered: number | null = null;


  constructor(private service: EmployeeService) {}

  ngOnInit():void {
    this.service.getEmployees().subscribe(data => this.employees = data);

}

}
