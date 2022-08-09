import {Servidor} from "../../categories/shared/servidor.model";

export class Setor {
   id!:number;
   descricao!:string;
   uf!:string;
   servidor!:Array<Servidor>
}
