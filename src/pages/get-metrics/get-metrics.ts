import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetMetricsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-metrics',
  templateUrl: 'get-metrics.html',
})
export class GetMetricsPage {

  angular: any = '00:00';
  react: any = '00:00';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetMetricsPage', Date.now());
    this.angular = '00:00';
    this.react = '00:00';
  }

  getAngularMetrics() {
    this.angular = this.millisToMinutesAndSeconds((<any>window).angularDomEndTime - (<any>window).angularStartTime);
  }

  getReactMetrics() {
    this.react = this.millisToMinutesAndSeconds((<any>window).reactDomEndTime - (<any>window).reactStartTime);
  }

  resetAll() {
    const now = Date.now();
    (<any>window).angularDomEndTime = now;
    (<any>window).reactDomEndTime = now;
    (<any>window).angularStartTime = now;
    (<any>window).reactStartTime = now;
    this.getAngularMetrics();
    this.getReactMetrics();
  }

  millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    const difference = `${minutes}:${parseInt(seconds)< 10 ? '0' : ''}${seconds}`;
    return difference === 'NaN:NaN' ? '00:00' : difference;
  }

}
