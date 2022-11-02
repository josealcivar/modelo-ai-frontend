import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiModeloService {
  constructor(private http: HttpClient) {}
  

async getUsers(anioLocal: String, zona: String, tienda: String, images: any): Promise<Observable<any>>{
    return this.http.get('http://ec2-34-224-78-48.compute-1.amazonaws.com:8001/api/projects/modelo?anios_local='+ anioLocal +'&zona='+zona+'&tipo_tienda='+tienda)
    
  }


}


