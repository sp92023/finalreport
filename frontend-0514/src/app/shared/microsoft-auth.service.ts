import {Injectable, NgZone} from '@angular/core';
import * as hello from 'hellojs/dist/hello.all.js';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import * as MicrosoftGraphClient from '@microsoft/microsoft-graph-client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {environment} from "../../environments/environment";


export const Configs = {
  appId: environment.microsoftClientId,
  scope: 'User.Read Mail.Send'
};

@Injectable()
export class MicrosoftAuthService {

  private socialUser = new BehaviorSubject<MicrosoftGraph.User>(null);
  currentSocialUser = this.socialUser.asObservable();

  constructor(private zone: NgZone) { }

  getAccessToken() {
    const msft = hello('msft').getAuthResponse();
    if (msft != null) {
      const accessToken = msft.access_token;
      return accessToken;
    } else {
      return null;
    }
  }

  getClient(): MicrosoftGraphClient.Client {
    const client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
        done(null, this.getAccessToken()); // first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

  getMe(): Observable<MicrosoftGraph.User> {
    const client = this.getClient();
    return Observable.fromPromise(client
      .api('me')
      .select('displayName, mail, userPrincipalName')
      .get()
      .then ((res => {
        return res;
      } ) )
    );
  }

  initAuth(): void {
    hello.init({
        msft: {
          id: Configs.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: environment.microsoftRedirectUri }
    );
  }

  signInWithMicrosoft(): void {
    hello('msft').login({ scope: Configs.scope }).then(
      () => {
        this.zone.run(() => {
          this.getMe().subscribe(me => {
            this.changeSocialUser(me);
          });
        });
      },
      e => console.error(e.error.message)
    );
  }

  signOutWithMicrosoft(): void {
    hello('msft').logout().then(
      () => {
        this.changeSocialUser(null);
      },
      e => console.error(e.error.message)
    );
  }

  changeSocialUser(socialUser: MicrosoftGraph.User): void {
    this.socialUser.next(socialUser);
  }

  getLoggedIn(): boolean {
    return !!this.socialUser.getValue();
  }

  getSocialUserMail(): string {
    if (this.socialUser !== null) {
      return this.socialUser.getValue().mail;
    } else {
      return '';
    }
  }

}
