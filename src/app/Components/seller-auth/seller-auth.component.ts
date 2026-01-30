import { Router  } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { SignUp } from '../../Interfaces/Signup';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError = "" ;

  constructor(
    private seller: SellerService,
    private router: Router
  ) {}

  ngOnInit():void{
      this.seller.reloadSeller();
    }

  signUp(data:SignUp):void{
   console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data:SignUp):void{
   //console.warn(data);
   this.seller.userLogin(data);
   this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.authError = "Login failed! Please enter valid credentials";
    }
  }
  )}

  openLogin():void{
    this.showLogin = true;
    this.authError = "";
  }
  openSigUp():void{
    this.showLogin = false;
    this.authError = "";
  }

}
