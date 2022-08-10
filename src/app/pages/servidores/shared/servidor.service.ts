import { Injectable } from '@angular/core';
import {CrudService} from "../../../shared/services/crud-service.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Servidor} from "./servidor.model";
import {Observable} from "rxjs";
import {Setor} from "../../setores/shared/setor.model";

@Injectable({
  providedIn: 'root'
})
export class ServidorService extends CrudService<Servidor> {
  URL_BASE_API!:string;
  apiPath!:string;

  constructor(protected http:HttpClient) {
    super(http);
    super.setAPIPath('servidor');
  }
  findByNome(nome:string) :Observable<Servidor[]>{
    let params:HttpParams = new HttpParams()
      .append("nome",nome);

    return this.getAll(params);
  }
}
