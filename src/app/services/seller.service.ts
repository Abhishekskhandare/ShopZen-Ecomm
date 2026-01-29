import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../Interfaces/Signup';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

constructor(private http: HttpClient){}
userSignUp(data : SignUp){
  console.log("seller.service.ts");
  console.log(data);
return this.http.post("http://localhost:3000/seller", data);
}




}

