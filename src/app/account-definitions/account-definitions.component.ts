import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { CredentialsService } from '../services/credentials-service';

@Component({
  selector: 'app-account-definitions',
  templateUrl: './account-definitions.component.html',
  styleUrls: ['./account-definitions.component.scss']
})
export class AccountDefinitionsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  socialUser: SocialUser | undefined;
  isLoggedin: boolean | undefined;

  constructor(private credentialsService: CredentialsService,
    private socialAuthService: SocialAuthService
    ) {

      this.socialAuthService.authState.subscribe((user) => {
        this.socialUser = user;
        this.isLoggedin = (user != null);
        console.log(user)
      });
  }

  ngOnInit(): void {
  }

  facebookLogin() {
    /*this.subscriptions.push(this.credentialsService.facebookLogin().subscribe(res => {
      console.log(res)
    }))*/
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);

  }

}
