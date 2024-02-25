import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent{

  constructor(
    private router: Router,
    ){}
  // =========== Declaration=============
  accessToken!: string;
  // ============= Methode ============

  signInWithGoogle() {
    console.log("Google clicked");
  }
  login(){
    this.router.navigate(['/osp/login']);
  }

}
