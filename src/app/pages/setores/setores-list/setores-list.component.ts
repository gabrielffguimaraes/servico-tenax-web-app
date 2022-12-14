import { Component, OnInit } from '@angular/core';
import { SetorService } from "../shared/setor.service";
import { Setor } from "../shared/setor.model";
import {Error} from "../../../shared/models/Error.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from "rxjs/operators";
import {EstadosService} from "../../../shared/services/estados.service";
import {Estado} from "../../../lists/lista-de-estados";

@Component({
  selector: 'app-setores-list',
  templateUrl: './setores-list.component.html',
  styleUrls: ['./setores-list.component.css']
})
export class SetoresListComponent implements OnInit {
  setores!: Setor[] ;
  formFilter!: FormGroup;

  constructor(private estadoService:EstadosService,
              private setorService:SetorService,
              private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.setorService.getAll().subscribe(
      setores => this.setores = <Setor[]>setores,
      error => console.log(error)
    )
    this.buildFormFilter();
    this.formFilter.get('descricao-filter')?.valueChanges
      .pipe(
        map(value =>  value.trim()),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => this.setorService.findByDescricao(value))
      ).subscribe(
        setores => {
          this.setores = <Setor[]>setores;
        }
      );
  }
  retornaEstado(uf:string) : Estado {
    return <Estado>this.estadoService.retornaEstado(uf);
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
  private buildFormFilter():void {
    this.formFilter = this.formBuilder.group({
      "descricao-filter":[null]
    })
  }
}
