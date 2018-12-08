import {Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-employeFrm',
    templateUrl: './employefrom.component.html',
})


export class EmployeefrmComponent implements OnInit{

    private employees : any[]=[];
    private btn_status : boolean = false;  
    private update_id : string;
    private p: 1;
    private employeform : FormGroup;

    constructor( private http : Http , private Fb : FormBuilder){

        this.employeform = this.Fb.group({
            name : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
            age :  [null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
            salary :[null, [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]

        })

    }

    ngOnInit(){
        this.getEmployee();
    }

    editEmployee(emp){
        this.employeform.patchValue(emp)
        this.update_id = emp._id;
        this.btn_status = true;
    }

    updateEmployee(){
        this.http.put("http://localhost:3000/api/employees/"+this.update_id, this.employeform.value).subscribe(
            (res)=>{
                console.log("Record Deleted ", res)
                this.getEmployee();
                this.employeform.patchValue({
                    name: '',
                    age:'',
                    salary:''
                })
            },
            (err)=>{
                console.log("Error occured ", err)
            }
        )
    }

    removeEmployee(id){
        this.http.delete("http://localhost:3000/api/employees/"+id).subscribe(
            (res)=>{
                console.log("Record Deleted", res)
                this.getEmployee();
            },
            (err)=>{
                console.log("error ", err)
            }
        )
    }

    addEmployee(){
        this.http.post("http://localhost:3000/api/employees/", this.employeform.value).subscribe(
            (res)=>{
                console.log("Employee Add successfully", res)
                this.getEmployee();
                this.employeform.patchValue({
                    name: '',
                    age:'',
                    salary:''
                })
            },
            (err)=>{
                console.log("Error occured while saving employee details", err)
            }
        )
    }

    getEmployee(){
        this.http.get("http://localhost:3000/api/employees").subscribe(
            (res)=>{
                console.log("this is response from API ", res.json())
                this.employees = res.json();
            },
            (err)=>
            console.log("Error occured ")
        )
    }
    
}