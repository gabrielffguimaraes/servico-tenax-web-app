import {Servidor} from "../../servidores/shared/servidor.model";

export class Setor {
   id!:number;
   descricao!:string;
   uf!:string;
   servidor!:Array<Servidor>
}
