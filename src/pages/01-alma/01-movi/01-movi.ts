import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AlmaService } from '../../../services/alma.service';
import { Movi_01Page } from '../01-movi-01/01-movi-01'


@IonicPage()
@Component({
  selector: 'page-01-movi',
  templateUrl: '01-movi.html',
})
export class MoviPage01 {

  public event = {
    month: '2021-01-01'
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
    this.almaService.ts_ttunid_q001();
    this.almaService.ts_tmprod_q001();
    this.almaService.ts_tmalma_ingr_q001();
  }

  ts_tmalma_ingr_i001(ht_p_se_guia,ht_p_co_guia,ht_p_co_prod,ht_p_co_unid,ht_p_ca_pack,ht_p_fe_venc){


    const loader = this.loadingCtrl.create({
        content: "REGISTRANDO INGRESO"
    });
    loader.present();



    // this.ca_co_prod=ht_p_co_prod;
    // this.ca_fe_venc=ht_p_fe_venc;
    // this.ca_co_unid=ht_p_co_unid;
    this.almaService.ts_tmalma_ingr_i001(ht_p_se_guia,ht_p_co_guia,ht_p_co_prod,ht_p_co_unid,ht_p_ca_pack,ht_p_fe_venc)
    .then(data=>{
      this.almaService.ts_tcprod_alma_q004();
    })
    .then(data=>{
      this.ts_tcprod_alma_q003();
    })
    .then(data=>{
      this.ts_tmalma_ingr_i001_3();
    }).then(data=>loader.dismiss());
  }

  ts_tcprod_alma_q003(){
    this.almaService.ts_tcprod_alma_q003().then(data=>{
      if(data['0']['ca_uscb']!='0'){
        this.navCtrl.setRoot(Movi_01Page);
      }
    });
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
    });
  }

}
