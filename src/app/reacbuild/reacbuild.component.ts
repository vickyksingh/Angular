import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reacbuild',
  templateUrl: './reacbuild.component.html',
  styleUrls: ['./reacbuild.component.css']
})
export class ReacbuildComponent implements OnInit {

  private myform : FormGroup;
  constructor(private fb : FormBuilder) {
    this.myform = this.fb.group({
      userName : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password : [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
   }

  ngOnInit() {
  }
  userLogin(){
    console.log("user details ", this.myform.value)
  }

}
