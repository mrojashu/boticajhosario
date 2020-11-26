import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class RrhhService{

	constructor(
  		public http: HttpClient
  	) {
	}

}