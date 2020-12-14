import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlmaService } from '../../../services/alma.service';

@IonicPage()
@Component({
  selector: 'page-01-sali',
  templateUrl: '01-sali.html',
})
export class SaliPage01 {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public almaService:AlmaService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    this.almaService.ts_tcprod_alma_q005();
    this.almaService.ts_tmagen_q001();
  }

  tcprod_alma_q006(co_prod){
  	console.log(co_prod);
  	this.almaService.ts_tcprod_alma_q006(co_prod).then(data=>{});
  }

}
