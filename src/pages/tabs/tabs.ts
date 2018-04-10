import { Component } from '@angular/core';

import { ReactPage } from '../react/react';
import { AngularPage } from '../angular/angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AngularPage;
  tab3Root = ReactPage;

  constructor() {

  }
}
