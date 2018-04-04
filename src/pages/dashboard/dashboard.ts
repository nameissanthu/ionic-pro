import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SampleProvider } from '../../providers/samplesvs/samplesvs';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
theme:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private samplesvs:SampleProvider) {
    this.theme=this.samplesvs.dashboardfunc()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
