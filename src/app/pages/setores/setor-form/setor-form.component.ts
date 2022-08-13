import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Estado} from "../../../lists/lista-de-estados";
import {EstadosService} from "../../../shared/services/estados.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SetorService} from "../shared/setor.service";
import {Setor} from "../shared/setor.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudComponent} from "../../../shared/components/crud/crud.component";
import {Servidor} from "../../servidores/shared/servidor.model";
import {ServidorService} from "../../servidores/shared/servidor.service";
import {Page} from "../../../shared/models/Pageable.model";

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent extends CrudComponent<Setor,Page<Setor>> implements OnInit,AfterContentChecked {

  setor!:Setor;
  setorForm!:FormGroup;
  estados!: Estado[];
  constructor(
              private formBuilder: FormBuilder,
              private servidorService: ServidorService,
              protected setorService: SetorService,
              protected route:ActivatedRoute,
              protected router:Router
  ) {
    super(setorService,route,router);
    super.setListPath('setores');
  }
  private carregarSetor() :void {
    super.load().subscribe(setor => {
      this.setor = setor;
      this.setorForm.patchValue(setor);
    });
  }
  private carregarEstados() :void {
    this.estados = EstadosService.pegaListaEstados();
  }
  private buildSetorForm() :void {
    this.setorForm =  this.formBuilder.group({
      id:[null],
      descricao: [ null , [Validators.required,Validators.minLength(2)]],
      uf:[null, Validators.required]
    });
  }

  deleteServidor(servidor:Servidor) {
    if(confirm("Deseja realmente excluir este Servidor?")) {
      this.servidorService.delete(servidor.id).subscribe(
        () => this.setor.servidor = this.setor.servidor.filter(element => element != servidor),
        () => alert("Erro ao deletar servidor")
      );
    }
  }

  ngOnInit() {
    super.ngOnInit();
    this.carregarEstados();
    this.carregarSetor();
    this.buildSetorForm();
    super.setForm(this.setorForm);
  }

}
