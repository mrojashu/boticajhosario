import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MoviPage01 } from '../01-movi/01-movi';
import { SaliPage01 } from '../01-sali/01-sali';
import { MermPage01 } from '../01-merm/01-merm';
import { HistPage01 } from '../01-hist/01-hist';

@IonicPage()
@Component({
  selector: 'page-01-tabs',
  templateUrl: '01-tabs.html',
})
export class TabsPage01 {

  tab0Root = HistPage01;
  tab1Root = MoviPage01;
  tab2Root = SaliPage01;
  tab3Root = MermPage01;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad 01TabsPage');
  }

}
