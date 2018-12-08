import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective',
  templateUrl: './rective.component.html',
  styleUrls: ['./rective.component.css']
})
export class RectiveComponent implements OnInit {

  private frm :FormGroup;
  constructor() {
    this.frm = new FormGroup({
      first_name : new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(8), Validators.pattern('^[a-zA-Z]*$')]),
      last_name : new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(8), Validators.pattern('^[a-zA-Z]*$')])
    })

  


   

  }
  register(){
    console.log("data got saved...", this.frm.value)
  }
  

  ngOnInit() {
  }

}
