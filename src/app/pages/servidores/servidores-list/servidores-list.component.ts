import { Component, OnInit } from '@angular/core';
import { ServidorService } from "../shared/servidor.service";
import { Servidor } from "../shared/servidor.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {Page} from "../../../shared/models/Pageable.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servidores-list',
  templateUrl: './servidores-list.component.html',
  styleUrls: ['./servidores-list.component.css']
})
export class ServidoresListComponent implements OnInit {
  totalPages: number = 0;
  servidores!: Servidor[] ;
  formFilter!: FormGroup;

  constructor(private servidorService:ServidorService,
              private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.buildFormFilter();
    this.carregarServidores();

    /*Observable Filters*/
    this.formFilter.get('nome-filter')?.valueChanges
      .pipe(
        map(value =>  value.trim()),
        debounceTime(200),
        distinctUntilChanged()
      ).subscribe(
      nome => this.carregarServidores(nome)
    )
  }
  displayPage(currentPage:number) {
    let nome = this.formFilter.get('nome-filter')?.value ?? "";
    this.carregarServidores(nome,currentPage);
  }
  deleteServidor(servidor:Servidor) {
    if(confirm("Deseja realmente excluir este Servidor ?")) {
      this.servidorService.delete(servidor.id).subscribe(
        () => this.servidores = this.servidores.filter(element => element != servidor),
        () => alert("Erro ao deletar servidor")
      );
    }
  }
  private carregarServidores(nome:string = "",currentPage:number = 0) {
    this.servidorService.findByNome(nome,currentPage)
      .subscribe(
        page => {
          this.servidores = page.content;
          this.totalPages = page.totalPages;
        }
      );
  }
  private buildFormFilter():void {
    this.formFilter = this.formBuilder.group({
      "nome-filter":[null]
    })
  }
}
