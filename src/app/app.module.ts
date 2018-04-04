import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { FormsModule } from '@angular/forms';
import { SignupPage } from '../pages/signup/signup';
import { SignupwithemailPage } from '../pages/signupwithemail/signupwithemail';
import { SampleProvider } from '../providers/samplesvs/samplesvs';
import { SamplePage } from '../pages/sample/sample';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SamplepostPage } from '../pages/samplepost/samplepost';
import { KlovrloginPage } from '../pages/klovrlogin/klovrlogin';
import { DashboardPage } from '../pages/dashboard/dashboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    SignupPage,
    SamplePage,
    SignupwithemailPage,
    SamplepostPage,
    KlovrloginPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
    HttpModule,
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    SignupPage,
    SamplePage,
    SignupwithemailPage,
    SamplepostPage,
    KlovrloginPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SampleProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SampleProvider
  ]
})
export class AppModule {}
