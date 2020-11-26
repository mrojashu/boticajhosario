import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GeneService } from '../../../services/gene.service';
import { MenuPage00 } from '../00-menu/00-menu';

@IonicPage()
@Component({
  selector: 'page-00-logi',
  templateUrl: '00-logi.html',
})
export class LogiPage00 {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl: LoadingController,
  	public alertCtrl: AlertController,
  	public geneService: GeneService
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad 00LogiPage');
  }

  	ts_tmusua_q001(ts_p_co_usua,ts_p_no_clav){

  	const loader = this.loadingCtrl.create({
        content: "INICIANDO SESION, espere un momento..."
    });

	loader.present();

	this.geneService.ts_tmusua_q001(ts_p_co_usua,ts_p_no_clav).then(data=>{
		if(data=='fallo'){
	      loader.dismiss();
	      const alert = this.alertCtrl.create({
	          title: 'ERROR DE CREDENCIALES',
	              subTitle: 'VERIFICA TUS CREDENCIALES Y VUELVELO A INTENTAR',
	              buttons: ['OK']
	          });
	      alert.present();
	    }			
	}).then(data=>loader.dismiss()).then(data=>this.navCtrl.setRoot(MenuPage00));
  }

}
