import { Component, OnInit } from '@angular/core';
import { ServidorService } from "../shared/servidor.service";
import { Servidor } from "../shared/servidor.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-servidores-list',
  templateUrl: './servidores-list.component.html',
  styleUrls: ['./servidores-list.component.css']
})
export class ServidoresListComponent implements OnInit {
  servidores!: Servidor[] ;
  formFilter!: FormGroup;
  constructor(private servidorService:ServidorService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.servidorService.getAll().subscribe(
      servidores => this.servidores = servidores,
      error => console.log(error)
    )
    this.buildFormFilter();
    this.formFilter.get('nome-filter')?.valueChanges
      .pipe(
        map(value =>  value.trim()),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => this.servidorService.findByNome(value))
      ).subscribe(
      servidores => {
        this.servidores = servidores;
      }
    );
  }
  deleteServidor(servidor:Servidor) {
    if(confirm("Deseja realmente excluir este Servidor ?")) {
      this.servidorService.delete(servidor.id).subscribe(
        () => this.servidores = this.servidores.filter(element => element != servidor),
        () => alert("Erro ao deletar servidor")
      );
    }
  }
  private buildFormFilter():void {
    this.formFilter = this.formBuilder.group({
      "nome-filter":[null]
    })
  }
}
