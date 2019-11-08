import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public signedIn: boolean;
  public user: any;
  public greeting: string;
  public usernameAttributes = 'email';
  public authState: {} = {};

  public signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'My user name',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string'
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      {
        label: 'PhoneNumber',
        key: 'phone_number',
        required: true,
        displayOrder: 3,
        type: 'string'
      },
      {
        label: 'Custom Attribute',
        key: 'custom_attr',
        required: false,
        displayOrder: 4,
        type: 'string',
        custom: true
      }
    ]
  };
  constructor(private amplifyService: AmplifyService) {
    // this.amplifyService.authStateChange$.subscribe(authState => {
    //   this.signedIn = authState.state === 'signedIn';
    //   console.log('authState.state', authState);
    //   if (!authState.user) {
    //     this.user = null;
    //   } else {
    //     this.user = authState.user;
    //     this.greeting = 'Hello ' + this.user.username;
    //   }
    // });
    console.log(this.amplifyService);

    this.amplifyService.setAuthState({
      state: 'signUp',
      user: null
    });
  }

  ngOnInit() {}
}
