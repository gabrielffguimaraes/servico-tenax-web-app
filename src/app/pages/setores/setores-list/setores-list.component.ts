import { Component, OnInit } from '@angular/core';
import { SetorService } from "../shared/setor.service";
import { Setor } from "../shared/setor.model";
import {Error} from "../../../shared/models/Error.model";

@Component({
  selector: 'app-setores-list',
  templateUrl: './setores-list.component.html',
  styleUrls: ['./setores-list.component.css']
})
export class SetoresListComponent implements OnInit {
  setores!: Setor[] ;
  constructor(private setorService:SetorService) {

  }

  ngOnInit(): void {
    this.setorService.getAll().subscribe(
      setores => this.setores = setores,
      error => console.log(error)
    )
  }
  deleteSetor(setor:Setor) {
    if(confirm("Deseja realmente excluir ?")) {
      this.setorService.delete(setor.id).subscribe(
        () => this.setores = this.setores.filter(element => element != setor),
        (err : {error : {errors : Error[]}}) => {
              let showErrs = "";
              err.error.errors.forEach(error => {
                showErrs+= `${error.descricao} \n`;
              })
              alert(showErrs);
        }
      );
    }
  }

}
