import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent {

  

  private p : number = 12;
  private c : number = 21;
  private m : number = 32;
  private h : number = 31;
  private e : number = 65;
  private average : number;

  allavrg(){
    //alert("hi")
    //this.average = (this.p+this.c+this.m+this.h+this.e)/5
  }

  private phy : string;
  private chem : string;
  private math : string;
  private hindi : string;
  private eng : string;
  private totalavg : number;

  avgall(){
    //alert("hi")
    this.totalavg = (parseInt(this.phy)+parseInt(this.chem)+parseInt(this.hindi)+parseInt(this.eng)+parseInt(this.math))/5
  }

  private lenght : string;
  private bridth : string;
  private Area : string;

  area(){
    
  }
  
}
