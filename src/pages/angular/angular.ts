import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUtilProvider } from '../../providers/app-util/app-util';

/**
 * Generated class for the AngularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-angular',
  templateUrl: 'angular.html',
})
export class AngularPage {

  count: Number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public util: AppUtilProvider,
  ) {
  }

  ionViewWillEnter() {
    this.count = this.util.getListCount();
  }

}
