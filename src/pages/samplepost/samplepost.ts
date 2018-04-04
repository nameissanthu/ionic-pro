import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SampleProvider } from '../../providers/samplesvs/samplesvs';

/**
 * Generated class for the SamplepostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-samplepost',
  templateUrl: 'samplepost.html',
})
export class SamplepostPage {
  user = { name: '', username: '', email: '', phone: '', website: '', 
  address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, 
  company: { name: '', bs: '', catchPhrase: '' }};
  constructor(public navCtrl: NavController, public navParams: NavParams, public samplesvs:SampleProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplepostPage');
  }
  saveUser(){
    this.samplesvs.addUser(this.user).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }

}
