import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SamplepostPage } from './samplepost';

@NgModule({
  declarations: [
    SamplepostPage,
  ],
  imports: [
    IonicPageModule.forChild(SamplepostPage),
  ],
})
export class SamplepostPageModule {}
