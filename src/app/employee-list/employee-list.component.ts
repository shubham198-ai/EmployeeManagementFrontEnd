import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any;
 
 constructor(private employeeService: EmployeeService,private router:Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }
  private getEmployees(){
    this.employeeService.getAllEmployees().subscribe(data=>{
      this.employees=data;
    });
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
}
  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: any) => {
        this.employees = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
   
    }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe((data: any) =>
      {
        console.log(data);
        this.getEmployees();
      })
  }
}
