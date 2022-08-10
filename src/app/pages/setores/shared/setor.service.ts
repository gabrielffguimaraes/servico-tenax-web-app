import { Injectable } from '@angular/core';
import {Setor} from "./setor.model";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "../../../shared/services/crud-service.service";

@Injectable({
  providedIn: 'root'
})
export class SetorService extends CrudService<Setor> {
  URL_BASE_API!:string;
  apiPath!:string;

  constructor(protected http:HttpClient) {
    super(http);
    super.setAPIPath('setor');
  }

}
