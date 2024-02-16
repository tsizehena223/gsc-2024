declare var google: any
import { FacebookLoginProvider, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { take, tap } from 'rxjs';
import { environement } from 'src/environements/environement';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  user: any;
constructor(
  private router: Router,
  private authService: SocialAuthService
){}

// ============== Declaration===============

envId = environement.client_id
  // intialised the google account
  unitGoogle(){
    google.accounts.id.initialize({
      client_id: this.envId,
      callback:(resp: any)=> this.handleLogin(resp)
    });
  google.accounts.id.renderButton(document.getElementById('social_media'),{
      theme: 'outline',
      size: 'large',
      shape:'pill',
      width: 360,
      text: "signin_with",
      locale:'en',
      logo_alignment:'center'

    })
  }
  private decodeToken(token: string){
    return JSON.parse(atob(token.split('.')[1]));
  }
  handleLogin(resp: any) {
    if(resp){
      //decoder le token
      const paylod = this.decodeToken(resp.credential)
      //enregistrer le token
      sessionStorage.setItem('loggedInUser', JSON.stringify(paylod));
      //redirection vers l'accueil
      this.router.navigate(['/home']);    
      return paylod;
       
    }
  }

  async signInWithFB(): Promise<void> {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['/home']);

  }
    ngOnInit(): void {
      this.unitGoogle()
    }
  }