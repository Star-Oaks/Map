import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider,} from "angular-6-social-login";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptor } from './shared/guard/jwt.iterceptor';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2476183045949648')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,

    SocialLoginModule,

    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDIQ3iCge4n17qWqm8My2GsJwjRzke0G4Y'}),
  ],
  providers: [
    CookieService,
    {
      provide: AuthServiceConfig,useFactory: getAuthServiceConfigs
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
