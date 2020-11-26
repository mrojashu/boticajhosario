import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LogiPage00 } from '../00-logi/00-logi';
import { GeneService } from '../../../services/gene.service';

@IonicPage()
@Component({
  selector: 'page-00-spsc',
  templateUrl: '00-spsc.html',
})
export class SpscPage00 {

	ar_cone_insp:any

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl: LoadingController,
  	public alertCtrl: AlertController,
  	public geneService: GeneService
  	) {
  }

  ionViewDidLoad() {
  	const loader = this.loadingCtrl.create({
        content: "BIENVENIDO"
    });
    loader.present();
    this.geneService.ts_cone_inte().then(
    	data=>this.ar_cone_insp=data
	).then(data=>this.ts_ingr()).then(data=>loader.dismiss());
  }

    ts_ingr(){

  	if(this.ar_cone_insp=='confirmar'){
        console.log(this.ar_cone_insp);
  		this.navCtrl.setRoot(LogiPage00);
  	}
  	else{
  		const alert = this.alertCtrl.create({
	        title: 'ERROR',
	        subTitle: 'VERIFICA TU CONEXION A INTERNET',
	        buttons: ['OK']
	        });
	        alert.present();
        }
  	}

}
