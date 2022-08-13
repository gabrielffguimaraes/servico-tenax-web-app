import { Injectable } from '@angular/core';
import {CrudService} from "../../../shared/services/crud-service.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Servidor} from "./servidor.model";
import {Observable} from "rxjs";
import {Page} from "../../../shared/models/Pageable.model";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServidorService extends CrudService<Servidor,Page<Servidor>> {
  //URL_BASE_API!:string;
  //apiPath!:string;

  constructor(protected http:HttpClient) {
    super(http);
    super.setAPIPath('servidor');
  }
  findByNome(nome:string,pagina = 0 ,tamanho = 10) :Observable<Page<Servidor>>{
    let params:HttpParams = new HttpParams()
      .append("nome",nome)
      .append("pagina",pagina)
      .append("tamanho",10)
    return <Observable<Page<Servidor>>> this.getAll(params);
  }
}
