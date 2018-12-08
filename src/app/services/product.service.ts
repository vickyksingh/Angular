import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ProductService{

    constructor(private x : Http){

    }

    saveProduct(link,data){
        return this.x.post(link,data);
    }
    getProduct(link){
        return this.x.get(link);
    }
    deleteProduct(link){
        return this.x.delete(link);
    }
    updateProduct(link, data){
        return this.x.put(link, data)
    }
}

