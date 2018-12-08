
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MessageService } from '../services/message.service';



@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit {
    private products: any[];
    p: number = 1;
    private pro: any = {};
    private btn_status : boolean = false;
    private update_id : string;
    private alert_status : boolean = false;

    constructor(private http: ProductService, private t: MessageService) {

    }
    ngOnInit() {
        this.getproducts();
    }
    editproduct(pro){
        this.alert_status = false;
        this.update_id = pro._id;
        this.btn_status = true;
        this.pro = pro;
        
    }

    updateProducts(){
        this.alert_status = false;
        this.http.updateProduct("http://localhost:3000/api/products/"+this.update_id , this.pro).subscribe(
            (res)=>{
                this.getproducts();
                this.t.success("product saved successfully!")
                this.alert_status = true;
            },
            (err)=>{
                console.log("this is error ", err)
            }
        )
    }

    getproducts() {
        this.http.getProduct("http://localhost:3000/api/products").subscribe(
            (res) => {
                console.log('this is response from api ', res.json())
                this.products = res.json();
            },
            (err) => {
                console.log('this is the error occures ', err)
            }
        )
    }
    addproduct() {
        if (this.validate()) {
            this.http.saveProduct("http://localhost:3000/api/products", this.pro).subscribe(
                (res) => {
                    console.log("record saved..")
                    this.getproducts();
                    this.pro = {};
                    this.t.success("product saved")
                    this.alert_status = true;
                },
                (err) => {
                    console.log("this is error , ", err)
                }
            )
        }
    }

    removeProduct(id) {
        this.http.deleteProduct("http://localhost:3000/api/products/" + id).subscribe(
            (res) => {
                console.log("record deleted... ")
                this.getproducts();
            },
            (err) => {
                console.log("this is error ", err)
            }
        )
    }
    validate() {
        if (this.pro.name) {
            if (this.pro.cost) {
                if (this.pro.image) {
                    return true;
                } else{
                    this.t.error("image is required")
                }
                }else {
                    this.t.error("cost ie required")
                }
            }else {
                this.t.error("product name required")
        }
    }
}