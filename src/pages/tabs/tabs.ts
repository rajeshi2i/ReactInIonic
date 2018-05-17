import { Component } from '@angular/core';

import { ReactPage } from '../react/react';
import { AngularPage } from '../angular/angular';
import { HomePage } from '../home/home';
import { GetMetricsPage } from '../get-metrics/get-metrics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AngularPage;
  tab3Root = ReactPage;
  // tab4Root = GetMetricsPage;
  constructor() {
  }

  tabChange(tab) {
    // tab.tabTitle === 'Angular'
  }
}
