import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetMetricsPage } from './get-metrics';

@NgModule({
  declarations: [
    GetMetricsPage,
  ],
  imports: [
    IonicPageModule.forChild(GetMetricsPage),
  ],
})
export class GetMetricsPageModule {}
