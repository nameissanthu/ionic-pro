import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SampleProvider } from '../../providers/samplesvs/samplesvs';
import { SamplepostPage } from '../samplepost/samplepost';
import { KlovrloginPage } from '../klovrlogin/klovrlogin';
import { DashboardPage } from '../dashboard/dashboard';



/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',

})
export class SamplePage {
 
users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public samplesvc:SampleProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplePage');
   
   }

   getUsers(){
     this.samplesvc.getUsers()
     .then(data => {
       this.users= data;
       console.log(this.users);
     });
    
    
   }
  
   samplepost(){
  this.navCtrl.push(SamplepostPage)
  }
  klovrlogin(){
    this.navCtrl.push(KlovrloginPage)
  }
  dashboard(){
    this.navCtrl.push(DashboardPage)
  }
  
   
}
