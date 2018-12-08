import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginfrm : FormGroup;
  constructor() {
    this.loginfrm = new FormGroup({
      userName : new FormControl(null,[Validators.required]),
      password : new FormControl(null, [Validators.required])
    })

   }

  ngOnInit() {
  }

}
