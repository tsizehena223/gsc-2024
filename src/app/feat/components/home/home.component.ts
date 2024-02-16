import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: SocialAuthService
  ){}

// =======Declaration=======

fb_teste!: boolean;
user!: any;

// ========Methode==========

 unitUsers(){
   this.authService.authState.subscribe((user) => {
    this.user =  user;
        if( user.provider == "FACEBOOK" ) {
            this.fb_teste = true;
        } else {
          this.fb_teste = false;
        }
  });
}
signOut(): void {
  this.authService.signOut();
}
  ngOnInit(): void {
    this.unitUsers();
  }
}
