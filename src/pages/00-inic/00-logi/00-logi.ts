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

  if(ts_p_co_usua==""||ts_p_co_usua==null){
    loader.dismiss();
    const alert = this.alertCtrl.create({
            title: 'INGRESAR USUARIO',
                subTitle: 'VERIFICA TUS CREDENCIALES Y VUELVELO A INTENTAR',
                buttons: ['OK']
            });
        alert.present();
  }else{
    if(ts_p_no_clav==""||ts_p_no_clav==null){
        loader.dismiss();
        const alert = this.alertCtrl.create({
            title: 'INGRESAR CONTRASEÑA',
                subTitle: 'VERIFICA TUS CREDENCIALES Y VUELVELO A INTENTAR',
                buttons: ['OK']
            });
        alert.present();
    }
    else{
      this.geneService.ts_tmusua_q001(ts_p_co_usua,ts_p_no_clav).then(data=>{
        if(data==""){
          console.log('hasta aqui1');
          loader.dismiss();
          const alert = this.alertCtrl.create({
              title: 'USUARIO NO SE ENCUENTRA',
                  subTitle: 'VERIFICA TUS CREDENCIALES Y VUELVELO A INTENTAR',
                  buttons: ['OK']
              });
          alert.present();
        }
        else{
          console.log('hasta aqui');
          if(data['0']['st_usua']=='A'){
            loader.dismiss();
            this.navCtrl.setRoot(MenuPage00);
          }
          else if(data['0']['st_usua']!='A'){
            loader.dismiss();
            const alert = this.alertCtrl.create({
                title: 'USUARIO NO SE ENCUENTRA ACTIVO',
                    subTitle: 'VERIFICA TUS CREDENCIALES Y VUELVELO A INTENTAR',
                    buttons: ['OK']
                });
            alert.present();
          }
          else if(data=='fallo'){
            loader.dismiss();
            const alert = this.alertCtrl.create({
                title: 'OCURRIO UN ERROR',
                    subTitle: 'VERIFICA TU CONEXION A INTERNET Y VUELVELO A INTENTAR',
                    buttons: ['OK']
                });
            alert.present();
          }
          else if(data==null){
            loader.dismiss();
            const alert = this.alertCtrl.create({
                title: 'OCURRIO UN ERROR',
                    subTitle: 'VERIFICA TU CONEXION A INTERNET Y VUELVELO A INTENTAR',
                    buttons: ['OK']
                });
            alert.present();
          }
          else{
            loader.dismiss();
            const alert = this.alertCtrl.create({
                title: 'NO SE ENCUENTRA USUARIO',
                    subTitle: 'VERIFICA TUS CREDENCIALES Y VUELVELO A INTENTAR',
                    buttons: ['OK']
                });
            alert.present();
          }  
        }
        });      
    }
  }




  }

}
