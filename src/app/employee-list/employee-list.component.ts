import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  
  
  constructor() { 
  }

  ngOnInit(): void {

    this.employees = [{
      "id": 1,
      "firstName": "Payal",
      "lastName": "Patel",
      "emailId": "payal@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Dhaval",
      "lastName": "Patel",
      "emailId": "dhaval@gmail.com"
    }];

  }
}
