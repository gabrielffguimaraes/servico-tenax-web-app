import { Component, OnInit } from '@angular/core';
import { SetorService } from "../shared/setor.service";
import { Setor } from "../shared/setor.model";

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
        () => alert("Erro ao deletar categoria")
      );
    }
  }

}
