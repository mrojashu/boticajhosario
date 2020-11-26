import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneService } from '../services/gene.service';


@Injectable()

export class AlmaService{

	public ar_re_tcprod_alma_q001:any
	public ar_re_ttunid_q001:any
	public ar_re_tmprod_q001:any
	public ar_re_tmalma_ingr_q001:any

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

	public ts_tmalma_ingr_i001(ht_p_nu_guia,ht_p_co_prod,ht_p_co_unid,ht_p_ca_pack,ht_p_fe_venc) : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{
			let ar_en_tmalma_ingr_i001={
				funcion: 'fu_tmalma_ingr_i001',
				ts_c_nu_guia: ht_p_nu_guia,
				ts_c_co_prod: ht_p_co_prod,
				ts_c_co_unid: ht_p_co_unid,
				ts_c_ca_pack: ht_p_ca_pack,
				ts_c_fe_venc: ht_p_fe_venc,
				ts_c_co_usua: this.geneService.ar_re_tmusua['0']['co_usua']
			};

			console.log(ar_en_tmalma_ingr_i001);

			this.http.post(this.web_api,JSON.stringify(ar_en_tmalma_ingr_i001)).subscribe(re=>{
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

}