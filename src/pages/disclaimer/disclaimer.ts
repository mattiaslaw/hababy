import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';
import { BasicInfoPage } from '../basicinfo/basicinfo';

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html'
})
export class DisclaimerPage {

  constructor(public navCtrl: NavController, private translate: TranslateService) {  }

  acceptDisclaimer() {
    this.navCtrl.setRoot(BasicInfoPage);
  }

}
