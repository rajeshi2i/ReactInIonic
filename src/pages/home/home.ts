import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppUtilProvider } from '../../providers/app-util/app-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listCount: Number = 0;

  constructor(
    public navCtrl: NavController,
    public util: AppUtilProvider
  ) {
    this.listCount = this.util.getListCount();
  }

  private setListCount() {
    this.util.setlistCount(this.listCount);
  }

}
