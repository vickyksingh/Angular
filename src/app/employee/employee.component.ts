import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employees: any[];
  private emp: any = {};
  private p: 1;
  private status: {};

  constructor(private Y: EmployeeService, private war: MessageService) { }

  ngOnInit() {
    this.getEmployee();
  }

  deleteEmploye(id) {
    this.Y.deleteRecord("http://localhost:3000/api/employees/" + id).subscribe(
      (res) => {

        console.log("data deleted...")
        this.getEmployee();
        this.status = "Record deleted"

      },
      (err) => {
        console.log("this is error ", err)
      }
    )

  }


  Addemployee() {
    if (this.validation()) {
      console.log(this.emp)
      this.Y.saveRecord("http://localhost:3000/api/employees", this.emp).subscribe(
        (res) => {
          console.log("record saved..")
          this.status = "record saved successfully";
          this.getEmployee();
          this.emp = {};
          this.war.success("data saved successfully...")
        },
        (err) => {
          console.log("this is error , ", err)
        }
      )
    }
  }

  getEmployee() {
    this.Y.getRecord("http://localhost:3000/api/employees").subscribe(
      (res) => {
        console.log('this is response from api ', res.json())

        this.employees = res.json();
      },
      (err) => {
        console.log('this is error occured ', err)
      }
    )
  }

  validation() {
    if (this.emp.name) {
      if (this.emp.age) {
        if (this.emp.salary) {
          return true;
        } else {
          this.war.error("Please enter employee salary")
        }
      } else {
        this.war.error("Age is missing")
      }
    } else {
      this.war.error("Employee name required")
    }
  }
}
