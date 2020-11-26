import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { SpscPage00 } from '../pages/00-inic/00-spsc/00-spsc'
import { LogiPage00 } from '../pages/00-inic/00-logi/00-logi'
import { MenuPage00 } from '../pages/00-inic/00-menu/00-menu'

import { IndxPage01 } from '../pages/01-alma/01-indx/01-indx'
import { MoviPage01 } from '../pages/01-alma/01-movi/01-movi'
import { Movi_01Page } from '../pages/01-alma/01-movi-01/01-movi-01'
import { ProdPage01 } from '../pages/01-alma/01-prod/01-prod'
import { OpciPage01 } from '../pages/01-alma/01-opci/01-opci'

import { IndxPage02 } from '../pages/02-rrhh/02-indx/02-indx'
import { OpciPage02 } from '../pages/02-rrhh/02-opci/02-opci'

import { IndxPage03 } from '../pages/03-sist/03-indx/03-indx'
import { AudiPage03 } from '../pages/03-sist/03-audi/03-audi'
import { OpciPage03 } from '../pages/03-sist/03-opci/03-opci'

import { GeneService } from '../services/gene.service';
import { AlmaService } from '../services/alma.service';
import { RrhhService } from '../services/rrhh.service';
import { SistService } from '../services/sist.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    SpscPage00,
    LogiPage00,
    MenuPage00,
    IndxPage01,
    IndxPage02,
    IndxPage03,
    MoviPage01,
    ProdPage01,
    OpciPage01,
    OpciPage02,
    AudiPage03,
    OpciPage03,
    Movi_01Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpscPage00,
    LogiPage00,
    MenuPage00,
    IndxPage01,
    IndxPage02,
    IndxPage03,
    MoviPage01,
    ProdPage01,
    OpciPage01,
    OpciPage02,
    AudiPage03,
    OpciPage03,
    Movi_01Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GeneService,
    AlmaService,
    RrhhService,
    SistService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
