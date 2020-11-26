import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class SistService{

	constructor(
  		public http: HttpClient
  	) {
	}

}