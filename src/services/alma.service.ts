import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneService } from '../services/gene.service';


@Injectable()

export class AlmaService{

	public ar_re_tcprod_alma_q001:any
	public ar_re_tcprod_alma_q003:any
	public ar_re_tcprod_alma_q004:any
	public ar_re_tcprod_alma_q005:any
	public ar_re_tcprod_alma_q006:any
	public ar_re_ttunid_q001:any
	public ar_re_tmprod_q001:any
	public ar_re_tmalma_ingr_q001:any
	public ar_re_tmagen_q001:any

	public ar_re_co_prod:any
	public ar_re_fe_venc:any
	public ar_re_co_unid:any

	constructor(
  		public http: HttpClient,
  		public geneService: GeneService
  	) {
	}

	web_api='https://uapseqp06.siperu.com/backend/web_api.php'

	public ts_tcprod_alma_q001() : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{

			let ar_en_tcprod_alma_q001={
				funcion: 'fu_tcprod_alma_q001'
			};
			this.http.post(this.web_api,JSON.stringify(ar_en_tcprod_alma_q001)).subscribe(re=>{
    		console.log(re);
				this.ar_re_tcprod_alma_q001=re;
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});

		});
		return p;			
	}

	public ts_tcprod_alma_q002(ht_p_busq) : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{

			let ar_en_tcprod_alma_q001={
				funcion: 'fu_tcprod_alma_q002',
				ts_c_dato: ht_p_busq
			};
			this.http.post(this.web_api,JSON.stringify(ar_en_tcprod_alma_q001)).subscribe(re=>{
			console.log(re);
				this.ar_re_tcprod_alma_q001=re;
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});

		});
		return p;			
	}


	public ts_ttunid_q001(){
		let ar_en_ttunid_q001={
			funcion: 'fu_ttunid_q001'
		};

		this.http.post(this.web_api,JSON.stringify(ar_en_ttunid_q001)).subscribe(re=>{
			console.log(re);
  			this.ar_re_ttunid_q001=re;
  		});
	}

	public ts_tmprod_q001(){
		let ar_en_tmprod_q001={
			funcion: 'fu_tmprod_q001'
		};

		this.http.post(this.web_api,JSON.stringify(ar_en_tmprod_q001)).subscribe(re=>{
  			this.ar_re_tmprod_q001=re;
  		});
	}

	public ts_tmalma_ingr_i001(ht_p_se_guia,ht_p_co_guia,ht_p_co_prod,ht_p_co_unid,ht_p_ca_pack,ht_p_fe_venc) : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{
			let ar_en_tmalma_ingr_i001={
				funcion: 'fu_tmalma_ingr_i001',
				ts_c_co_guia: ht_p_co_guia,
				ts_c_se_guia: ht_p_se_guia,
				ts_c_co_prod: ht_p_co_prod,
				ts_c_co_unid: ht_p_co_unid,
				ts_c_ca_pack: ht_p_ca_pack,
				ts_c_fe_venc: ht_p_fe_venc,
				ts_c_co_usua: this.geneService.ar_re_tmusua['0']['co_usua']
			};

			this.ar_re_co_prod=ht_p_co_prod;
			this.ar_re_fe_venc=ht_p_fe_venc;
			this.ar_re_co_unid=ht_p_co_unid;



			console.log(ar_en_tmalma_ingr_i001);

			this.http.post(this.web_api,JSON.stringify(ar_en_tmalma_ingr_i001)).subscribe(re=>{
			console.log(re);
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});

		});
		return p;			
	}

	public ts_tmalma_ingr_q001(){
		let ar_en_tmalma_ingr_q001={
			funcion: 'fu_tmalma_ingr_q001'
		};

		this.http.post(this.web_api,JSON.stringify(ar_en_tmalma_ingr_q001)).subscribe(re=>{
  			this.ar_re_tmalma_ingr_q001=re;
  		});
	}

	public ts_tcprod_alma_q003() : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{
			let ar_en_tcprod_alma_q003={
				funcion: 'fu_tcprod_alma_q003'
			};

			this.http.post(this.web_api,JSON.stringify(ar_en_tcprod_alma_q003)).subscribe(re=>{
				console.log(re);
				this.ar_re_tcprod_alma_q003=re;
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});
	  	});
		return p;	
	}

	public ts_tcprod_alma_q004() : Promise<any>
	{

		let p =	new Promise((resolve, reject)=>{
			let ar_en_tcprod_alma_q004={
				funcion: 'fu_tcprod_alma_q004',
				ts_c_co_prod: this.ar_re_co_prod,
				ts_c_co_unid: this.ar_re_co_unid
			};

			console.log(ar_en_tcprod_alma_q004);

			this.http.post(this.web_api,JSON.stringify(ar_en_tcprod_alma_q004)).subscribe(re=>{
				console.log(re);
				console.log('funci');
				this.ar_re_tcprod_alma_q004=re;
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});
	  	});
		return p;	
	}

	public ts_tmalma_ingr_q001_2(): Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{
			let ar_en_tmalma_ingr_q001={
				funcion: 'fu_tmalma_ingr_q001'
			};

			this.http.post(this.web_api,JSON.stringify(ar_en_tmalma_ingr_q001)).subscribe(re=>{
	  			this.ar_re_tmalma_ingr_q001=re;
	  			resolve(re)
	  		},(err)=>{
				resolve("Fallo");
			});
	  	});
		return p;	
	}

	public ts_tcprod_alma_u001(ht_p_co_barr) : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{
			let ar_en_tcprod_alma_u001={
				funcion: 'fu_tcprod_alma_u001',
				ts_c_co_prod: this.ar_re_co_prod,
				ts_c_fe_venc: this.ar_re_fe_venc,
				ts_c_co_pack: this.ar_re_tcprod_alma_q004['0']['co_eqiv'],
				ts_c_co_barr: ht_p_co_barr,
				ts_c_co_usua: this.geneService.ar_re_tmusua['0']['co_usua']
			};

			console.log(ar_en_tcprod_alma_u001);

			this.http.post(this.web_api,JSON.stringify(ar_en_tcprod_alma_u001)).subscribe(re=>{
			console.log('llego');
			console.log(re);
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});

		});
		return p;			
	}

	public ts_tcprod_alma_q005(){
		let ar_en_ttunid_q001={
			funcion: 'fu_tcprod_alma_q005'
		};

		this.http.post(this.web_api,JSON.stringify(ar_en_ttunid_q001)).subscribe(re=>{
			console.log(re);
  			this.ar_re_tcprod_alma_q005=re;
  		});
	}

	public ts_tcprod_alma_q006(ht_p_co_prod) : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{

			let ar_en_tcprod_alma_q001={
				funcion: 'fu_tcprod_alma_q006',
				ts_c_co_prod: ht_p_co_prod
			};
			console.log(ar_en_tcprod_alma_q001);
			console.log('hasta aqui llega');
			this.http.post(this.web_api,JSON.stringify(ar_en_tcprod_alma_q001)).subscribe(re=>{
			console.log(re);
				this.ar_re_tcprod_alma_q006=re;
					resolve(re);
			},(err)=>{
				resolve("Fallo");
			});

		});
		return p;			
	}

	public ts_tmagen_q001(){
		let ar_en_tmagen_q001={
			funcion: 'fu_tmagen_q001'
		};

		this.http.post(this.web_api,JSON.stringify(ar_en_tmagen_q001)).subscribe(re=>{
			console.log(re);
  			this.ar_re_tmagen_q001=re;
  		});
	}

}