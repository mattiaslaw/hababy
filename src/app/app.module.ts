import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/en/disclaimer/disclaimer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    DisclaimerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    DisclaimerPage
  ],
  providers: []
})
export class AppModule {}