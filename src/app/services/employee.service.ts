

import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class EmployeeService{

    constructor(private X : Http){

    }

    saveRecord(link,data){
        return this.X.post(link, data)
    }
    getRecord(link){
        return this.X.get(link)
    }
    deleteRecord(link){
        return this.X.delete(link)
    }
    updaterecord(link, data){
        return this.X.put(link, data)
    }
}