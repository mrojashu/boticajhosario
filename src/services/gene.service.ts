import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class GeneService{

	public ar_re_tmusua:any

	constructor(
  		public http: HttpClient
  	) {
	}

	web_api='https://uapseqp06.siperu.com/backend/web_api.php'

	public ts_cone_inte() : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{

			let ar_en_cone={
				funcion: 'fu_cone'
			};
			this.http.post(this.web_api,JSON.stringify(ar_en_cone)).subscribe(re=>{
				if(re=='confirmar'){
					resolve(re);
				}
				else{
					resolve("Fallo");
				}
			},(err)=>{
				resolve("Fallo");
			});

		});
		return p;			
	}

	public ts_tmusua_q001(ts_p_co_usua,ts_p_no_clav) : Promise<any>
	{
		let p =	new Promise((resolve, reject)=>{
			let ar_en_tmusua_q001={
		  		funcion: 'fu_tmusua_q001',
		  		ts_c_co_usua: ts_p_co_usua,
		  		ts_c_no_clav: ts_p_no_clav

		  	};
		  		console.log('hola');
		  	this.http.post(this.web_api, JSON.stringify(ar_en_tmusua_q001)).subscribe(re=>{
		  		this.ar_re_tmusua=re;
		  			console.log(re);
		  			resolve(re);
		  	},(err)=>{
		  		console.log('dffdsf');
		  		resolve("Fallo");
			});

		});
		return p;			
	}

}