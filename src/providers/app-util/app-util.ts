// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppUtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppUtilProvider {
  listCount: Number = 0;
  constructor() {
    console.log('Hello AppUtilProvider Provider');
  }

  public getListCount() {
    return this.listCount;
  }

  public setlistCount(count: Number) {
    this.listCount = count;
  }

}
