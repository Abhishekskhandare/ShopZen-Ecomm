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

  constructor(
    private seller: SellerService,
    private router: Router
  ) {}
  showLogin = false;
  ngOnInit():void{
      this.seller.reloadSeller();
    }

  signUp(data:SignUp):void{
   console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data:SignUp):void{
   console.warn(data);
  }

  openLogin():void{
    this.showLogin = true;
  }
  openSigUp():void{
    this.showLogin = false;
  }

}
