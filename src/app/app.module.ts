import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Reactive Form

import {ReactiveFormsModule} from '@angular/forms';


// App routing modules
import {AppRoutingModule} from './shared/routing/app-routing.module';

// App components
import {AppComponent} from './app.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// Auth service
import {AuthService} from './shared/services/authenticate/auth.service';
import {WebsocketService} from './shared/services/websocket/websocket.service';
import {QueComponent} from './components/que/que.component';
import {HighscoreComponent} from './components/highscore/highscore.component';
import {GameboardComponent} from './components/gameboard/gameboard.component';
import {GameServiceService} from './shared/services/gameservice/game-service.service';
import {ScoreService} from './shared/services/score/score.service';



@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        SignUpComponent,
        DashboardComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        QueComponent,
        HighscoreComponent,
        GameboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, 'The Mind'),
        AngularFireAuthModule,
        AngularFirestoreModule,
        ReactiveFormsModule,
        HttpClientModule



    ],
    providers: [AuthService, Title, WebsocketService, GameServiceService,ScoreService],
    bootstrap: [AppComponent]
})

export class AppModule {
}