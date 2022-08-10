import { Injectable } from '@angular/core';
import {CrudService} from "../../../shared/services/crud-service.service";
import {HttpClient} from "@angular/common/http";
import {Servidor} from "./servidor.model";

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

}
