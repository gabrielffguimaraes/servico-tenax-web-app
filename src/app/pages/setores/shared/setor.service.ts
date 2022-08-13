import { Injectable } from '@angular/core';
import {Setor} from "./setor.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CrudService} from "../../../shared/services/crud-service.service";
import {Observable} from "rxjs";
import {Page} from "../../../shared/models/Pageable.model";
import {Servidor} from "../../servidores/shared/servidor.model";

@Injectable({
  providedIn: 'root'
})
export class SetorService extends CrudService<Setor,Page<Setor>> {

  URL_BASE_API!:string;
  apiPath!:string;

  constructor(protected http:HttpClient) {
    super(http);
    super.setAPIPath('setor');
  }

  findByDescricao(descricao:string) :Observable<Setor[] | Page<Setor>>{
    let params:HttpParams = new HttpParams()
      .append("descricao",descricao);

    return this.getAll(params);
  }

}
