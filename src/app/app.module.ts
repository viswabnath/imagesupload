import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCfFuHLqt828zsqLPnkF6ujWOJwcudzomw",
  authDomain: "ionicstorage.firebaseapp.com",
  databaseURL: "https://ionicstorage.firebaseio.com",
  projectId: "ionicstorage",
  storageBucket: "ionicstorage.appspot.com",
  messagingSenderId: "810816262285"
    };
    firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
