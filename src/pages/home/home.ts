import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { NavController, Platform } from 'ionic-angular';

import { DisclaimerPage } from '../disclaimer/disclaimer';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController,
      private translate: TranslateService ) {
  }

  goEnglish() {
    this.translate.use('en');

    this.navCtrl.setRoot(DisclaimerPage);
  }

  goArabic() {
    this.translate.use('ar');

    this.navCtrl.setRoot(DisclaimerPage);
  }

}


