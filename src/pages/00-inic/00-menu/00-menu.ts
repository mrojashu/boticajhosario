import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { GeneService } from '../../../services/gene.service';

import { IndxPage01 } from '../../01-alma/01-indx/01-indx'
import { TabsPage01 } from '../../01-alma/01-tabs/01-tabs'
import { ProdPage01 } from '../../01-alma/01-prod/01-prod'
import { OpciPage01 } from '../../01-alma/01-opci/01-opci'

import { IndxPage02 } from '../../02-rrhh/02-indx/02-indx'
import { OpciPage02 } from '../../02-rrhh/02-opci/02-opci'

import { IndxPage03 } from '../../03-sist/03-indx/03-indx'
import { AudiPage03 } from '../../03-sist/03-audi/03-audi'
import { OpciPage03 } from '../../03-sist/03-opci/03-opci'

@IonicPage()
@Component({
  selector: 'page-00-menu',
  templateUrl: '00-menu.html',
})
export class MenuPage00 {

  ar_re_de_foto:any
  ar_re_no_trab:any

	username='';
	pages=[];

	@ViewChild(Nav) nav: Nav; 

  constructor(
  	public navCtrl: NavController,
  	private appCtrl: App,
    public geneService: GeneService
  	) {
  }

  ionViewDidLoad() {
    this.ar_re_de_foto=this.geneService.ar_re_tmusua['0']['de_foto'];
    this.ar_re_no_trab=this.geneService.ar_re_tmusua['0']['no_trab'];
  }


  ionViewWillEnter() {
    if(this.geneService.ar_re_tmusua['0']['co_grup']=='ALM'){
      this.pages=[
        { title: 'INVENTARIO GENERAL', page: IndxPage01, icon: 'clipboard' },
        { title: 'CONTROL DE MOVIMIENTOS', page: TabsPage01, icon: 'bookmarks' },
        { title: 'PANEL DE PRODUCTOS', page: ProdPage01, icon: 'filing' },
        { title: 'OPCIONES DE ALMACEN', page: OpciPage01, icon: 'construct' }
      ];
      this.openPage(IndxPage01);      
    }
    else if(this.geneService.ar_re_tmusua['0']['co_grup']=='RRHH'){
      this.pages=[
        { title: 'PERSONAL', page: IndxPage02, icon: 'stats' },
        { title: 'OPCIONES', page: OpciPage02, icon: 'list-box' }
      ];
      this.openPage(IndxPage02);      
    }
    else if(this.geneService.ar_re_tmusua['0']['co_grup']=='SIS'){
      this.pages=[
        { title: 'USUARIOS', page: IndxPage03, icon: 'stats' },
        { title: 'AUDITORIAS', page: AudiPage03, icon: 'list-box' },
        { title: 'OPCIONES DE SISTEMA', page: OpciPage03, icon: 'paper' }
      ];
      this.openPage(IndxPage03);      
    }
  }

  openPage(page){
  	this.nav.setRoot(page);
  }

}
