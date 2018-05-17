import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReactPage } from '../pages/react/react';
import { AngularPage } from '../pages/angular/angular';
import { HomePage } from '../pages/home/home';
import { GetMetricsPage } from '../pages/get-metrics/get-metrics';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';
import { AppUtilProvider } from '../providers/app-util/app-util';

@NgModule({
  declarations: [
    MyApp,
    ReactPage,
    AngularPage,
    HomePage,
    GetMetricsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReactPage,
    AngularPage,
    HomePage,
    GetMetricsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUtilProvider
  ]
})
export class AppModule {}
