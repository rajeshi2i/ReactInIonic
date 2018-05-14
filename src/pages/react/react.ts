import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUtilProvider } from '../../providers/app-util/app-util';

/**
 * Generated class for the ReactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-react',
  templateUrl: 'react.html',
})
export class ReactPage {
  count: Number;
  constructor(
    public navCtrl: NavController,
    public util: AppUtilProvider,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.count = this.util.getListCount();
  }

}
