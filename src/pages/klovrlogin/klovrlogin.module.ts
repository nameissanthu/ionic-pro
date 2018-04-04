import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KlovrloginPage } from './klovrlogin';

@NgModule({
  declarations: [
    KlovrloginPage,
  ],
  imports: [
    IonicPageModule.forChild(KlovrloginPage),
  ],
})
export class KlovrloginPageModule {}
