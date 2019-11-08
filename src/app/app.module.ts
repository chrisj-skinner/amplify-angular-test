import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';

// import { AmplifyService } from 'aws-amplify-angular';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule],
  // imports: [BrowserModule, AppRoutingModule],
  // providers: [],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
