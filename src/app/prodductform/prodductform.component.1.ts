import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-prodductform',
  templateUrl: './prodductform.component.html',
  styleUrls: ['./prodductform.component.css']
})
export class ProdductformComponent implements OnInit {

  private products : any[];
  private btn_status : boolean= false;
  private product_id : string;
  

  private productForm : FormGroup;
  constructor(private http : Http) {
    this.productForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      cost : new FormControl(null, [Validators.required]),
      brand : new FormControl(null, [Validators.required]),
      image : new FormControl(null, [Validators.required])
    })
   }

  ngOnInit() {
    this.getproducts();
  }
  EditProduct(products){
    this.product_id = products._id;
    this.products = products;

  }

  DeleteProduct(id){
    this.http.delete("http://localhost:3000/api/products/"+id).subscribe(
      (res)=>{
        console.log("product deleted successfully")
        this.getproducts();
      },
      (err)=>{
        console.log("this is error occured ", err)

      }

    )
  }

  getproducts(){
    this.http.get("http://localhost:3000/api/products").subscribe(
      (res)=>{
        console.log("this is response from api ", res.json())
        this.products = res.json();
        
      },
      (err)=>{
        console.log("this is error occured ", err)
      }
    )
  }

  addproduct(){
    console.log(this.productForm.value)
    this.http.post("http://localhost:3000/api/products", this.productForm.value).subscribe(
      (ress)=>{
        console.log("product added successfully")
        this.getproducts();
      },
      (err)=>{
        console.log("this is error occured durring ", err)
      }
    )
  }

}
