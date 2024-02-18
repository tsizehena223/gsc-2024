import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatRoutingModule } from './feat-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environement } from 'src/environements/environement';
import { TestComponent } from './components/test/test.component';
@NgModule({
  declarations: [
    LoginComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    FeatRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environement.client_id)
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(`${environement.fb_client_id}`)
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }
  ],

})
export class FeatModule { }
