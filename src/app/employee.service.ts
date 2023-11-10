import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string = 'http://localhost:5555/api/v1';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`);
  }
  createEmployee(employee:Employee):Observable<Object>{
return this.http.post(`${this.baseUrl}/create`,employee); 
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
}
}
