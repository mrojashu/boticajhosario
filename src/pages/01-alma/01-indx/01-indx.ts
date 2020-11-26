import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlmaService } from '../../../services/alma.service';

@IonicPage()
@Component({
  selector: 'page-01-indx',
  templateUrl: '01-indx.html',
})
export class IndxPage01 {

  ar_re_tcprod_alma_q001:any

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public almaService:AlmaService
  	) {
  }

  ionViewDidLoad() {
    this.almaService.ts_ttunid_q001();
    this.almaService.ts_tmprod_q001();
    this.almaService.ts_tmalma_ingr_q001();
    this.almaService.ts_tcprod_alma_q001().then(data=>this.ar_re_tcprod_alma_q001=data);
  }

  ts_tcprod_alma_q002(ht_p_busq){
    const loader = this.loadingCtrl.create({
      content: "ESPERE UN MOMENTO..."
    });
    loader.present();
    this.almaService.ts_tcprod_alma_q002(ht_p_busq).then(data=>{
      if(data=="fallo"){
        loader.dismiss();
        const alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'algo salio mal',
          buttons: ['OK']
          });
          alert.present();
      }
    }).then(data=>this.ar_re_tcprod_alma_q001=this.almaService.ar_re_tcprod_alma_q001).then(data=>{loader.dismiss();console.log(this.almaService.ar_re_tcprod_alma_q001);});
  }

}
