import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-prodductform',
  templateUrl: './prodductform.component.html',
  styleUrls: ['./prodductform.component.css']
})
export class ProdductformComponent implements OnInit {

  private products : any[] = [];
  private btn_status : boolean= false;
  private product_id : string;
  

  private productForm : FormGroup;
  constructor(private http : Http) {
    this.productForm = new FormGroup({
      name : new FormControl(null,[Validators.required,Validators.minLength(2), Validators.maxLength(8)]),
      cost : new FormControl(null, [Validators.required, Validators.minLength(2),Validators.maxLength(8)]),
      brand : new FormControl(null, [Validators.required, Validators.minLength(2),Validators.maxLength(8)]),
      image : new FormControl(null, [Validators.required])
    })
   }

  ngOnInit() {
    this.getproducts();
  }
  EditProduct(x){
    this.productForm.patchValue(x);
    this.product_id = x._id;
  
    this.btn_status = true;

  }
  updateProduct(){
    this.http.put("http://localhost:3000/api/products/"+this.product_id, this.productForm.value).subscribe(
      (res)=>{
        
        // this.btn_status = true;
        this.getproducts();
        console.log("product updated")
        this.productForm.patchValue({
          name : '',
          cost : '',
          brand : '',
          image : ''
        })
      },
      (err)=>{
        console.log("this is error ", err)
      }
    )
   
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
        this.productForm.patchValue({
          name : '',
          cost : '',
          brand : '',
          image : ''
        })
      },
      (err)=>{
        console.log("this is error occured durring ", err)
      }
    )
  }

}
