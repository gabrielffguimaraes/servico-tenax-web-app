import { Injectable } from '@angular/core';
import {Estado, estados} from "../../lists/lista-de-estados";

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor() { }

  static pegaListaEstados(): Array<Estado> {
    return estados;
  }
}
