import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RactangleService } from '../services/ractangle.service';
import { CalculaterServices } from '../services/calculater.service';


@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent {
  private users : any[];
  private places : any[];
  private user : any;
private Result : any;

  constructor(private x : Http, private z : RactangleService, private Cal : CalculaterServices) {

    // var ans = this.z.area(4,5);
    // console.log("this is area of the ractangel :", ans);

    // var ans1 = this.z.perimeter(7,12);
    // console.log("this is perimeter of the rectangle ", ans1)

    // var AnsCal = this.Cal.Add(2,7)
    // console.log(`this is addition of two number ${AnsCal}`)
    // this.Result = AnsCal;

    // var Anscal = this.Cal.Sub(6,3);
    // console.log(`this is sub of two numbers ${Anscal}`)

  //   this.x.get("https://reqres.in/api/users?page=2").subscribe(
  //     (res)=>{
  //      console.log("the result is ", JSON.stringify(res.json().data)) 
  //       this.users = res.json().data
  //     },
  //     (error)=>{
  //       console.log("this is error ",error)
  //     },
  //     ()=>{

  //     }
  //   )
  //  }

  // this.x.get("https://reqres.in/api/unknowna").subscribe(
  //   (res)=>{
  //     console.log("this is result", JSON.stringify(res.json().data))
  //     this.places = res.json().data;
  //   },
  //   (error)=>{
  //     console.log("this is error ", error)
  //   }
  // )
  // this.x.get("https://reqres.in/api/users/2").subscribe(
  //   (res)=>{
  //     console.log("this is result", JSON.stringify(res.json()))
  //     this.user = res.json();
  //   },
  //   (error)=>{
  //     console.log("this is error ", error)
  //   }
  // )
   }





}
