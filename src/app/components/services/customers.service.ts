import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseUrl= environment.baseUrl
  constructor(private  http:HttpClient) { }

  public findCustomer(page:any,size:any,searchText:any):Observable<any>{
    return this.http.get(this.baseUrl+'/users/list?page='+page+'&size='+size+'&searchText='+searchText)
  }
}
