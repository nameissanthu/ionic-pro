import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupwithemailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupwithemail',
  templateUrl: 'signupwithemail.html',
})
export class SignupwithemailPage {
  remember: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupwithemailPage');
  }
  updateRemember() {
    console.log('remember new state:' + this.remember);
  }

}
