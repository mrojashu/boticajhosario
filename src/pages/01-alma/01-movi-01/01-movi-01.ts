import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlmaService } from '../../../services/alma.service';
import { MoviPage01 } from '../01-movi/01-movi';

@IonicPage()
@Component({
  selector: 'page-01-movi-01',
  templateUrl: '01-movi-01.html',
})
export class Movi_01Page {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public almaService:AlmaService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  	 ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Movi_01Page');
  }

  ts_tcprod_alma_u001(ht_p_ca_barr){
  	const loader = this.loadingCtrl.create({
        content: "REGISTRANDO CODIGO DE BARRA"
    });
    loader.present();
  	this.almaService.ts_tcprod_alma_u001(ht_p_ca_barr).then(data=>{
  		this.ts_tcprod_alma_q003();
  	}).then(data=>loader.dismiss());
  }

  ts_tcprod_alma_q003(){
  	this.almaService.ts_tcprod_alma_q003().then(data=>{
      if(data['0']['ca_uscb']!='0'){
        this.navCtrl.setRoot(Movi_01Page);
      } 
      else if(data['0']['ca_uscb']=='0'){
        this.navCtrl.setRoot(MoviPage01);
      }  		
  	});
  }

}
