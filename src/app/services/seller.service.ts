import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../Interfaces/Signup';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from '../Interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

isSellerLoggedIn= new BehaviorSubject<boolean>(false);
isLoginError = new EventEmitter<boolean>(false);
constructor(private http: HttpClient, private router: Router){}

userSignUp(data : SignUp){
  return this.http
          .post("http://localhost:3000/seller", data, {observe:'response'})
          .subscribe((result)=>{
            this.isSellerLoggedIn.next(true);
            localStorage.setItem('seller', JSON.stringify(result.body));
            this.router.navigate(['seller-home']);
            console.warn("seller service result:-- " + result);
            return result;
          });
}


 userLogin(data:Login){
   this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result)
    if(result && result.body && result.body.length===1){
      this.isLoginError.emit(false)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    }else{
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }


reloadSeller(){
  if(localStorage.getItem('seller')){
    this.isSellerLoggedIn.next(true);
    this.router.navigate(['seller-home']);
  }
}

}
