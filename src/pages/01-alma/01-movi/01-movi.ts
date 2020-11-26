import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlmaService } from '../../../services/alma.service';


@IonicPage()
@Component({
  selector: 'page-01-movi',
  templateUrl: '01-movi.html',
})
export class MoviPage01 {

  ar_re_ttunid_q001:any
  ar_re_tmprod_q001:any
  ar_re_tmalma_ingr_q001:any

  public event = {
    month: Date.now()
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public almaService:AlmaService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    this.ar_re_tmalma_ingr_q001=this.almaService.ar_re_tmalma_ingr_q001;
    this.ar_re_ttunid_q001 = this.almaService.ar_re_ttunid_q001;
    this.ar_re_tmprod_q001 = this.almaService.ar_re_tmprod_q001;
  }

  ts_tmalma_ingr_i001(ht_p_nu_guia,ht_p_co_prod,ht_p_co_unid,ht_p_ca_pack,ht_p_fe_venc){


    const loader = this.loadingCtrl.create({
        content: "REGISTRANDO INGRESO"
    });
    loader.present();



    // this.ca_co_prod=ht_p_co_prod;
    // this.ca_fe_venc=ht_p_fe_venc;
    // this.ca_co_unid=ht_p_co_unid;
    this.almaService.ts_tmalma_ingr_i001(ht_p_nu_guia,ht_p_co_prod,ht_p_co_unid,ht_p_ca_pack,ht_p_fe_venc).then(data=>{
      this.ts_tmalma_ingr_i001_3();
    }).then(data=>loader.dismiss());
  }

  // ts_tmalma_ingr_i001_2(){
  //   this.almaService.ts_tcprod_alma_q003().then(data=>{
  //     if(data=='Fallo'){
  //       const alert = this.alertCtrl.create({
  //           title: 'ERROR',
  //               subTitle: 'VERIFICA TU CONEXION Y VUELVELO A INTENTAR',
  //               buttons: ['OK']
  //           });
  //       alert.present();
  //     }
  //   }).then(data=>{
  //     // if(data['0']['ca_uscb']==0){
        
  //       this.ts_tmalma_ingr_i001_3();
  //     // }
  //     // else{
  //     //   this.navCtrl.setRoot(MoviPage01);
  //     // }
  //   });
  // }

  ts_tmalma_ingr_i001_3(){
    this.almaService.ts_tmalma_ingr_q001_2().then(data=>{
      if(data=='Fallo'){
        const alert = this.alertCtrl.create({
            title: 'ERROR',
                subTitle: 'VERIFICA TU CONEXION Y VUELVELO A INTENTAR',
                buttons: ['OK']
            });
        alert.present();        
      }
    }).then(data=>this.ar_re_tmalma_ingr_q001=this.almaService.ar_re_tmalma_ingr_q001).then(data=>this.navCtrl.setRoot(MoviPage01));
  }

}
