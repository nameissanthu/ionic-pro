import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  remember: boolean;
  public email = '';
  public password= '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  updateRemember() {
    console.log('remember new state:' + this.remember);
  }
  login(){
   
    if(this.email==='',this.password===''){
      console.log('fields Required')
    }else{
      console.log('success login')
    }
  }



}
