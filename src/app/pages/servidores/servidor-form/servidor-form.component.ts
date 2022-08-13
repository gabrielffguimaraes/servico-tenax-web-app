import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {CrudComponent} from "../../../shared/components/crud/crud.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServidorService} from "../../servidores/shared/servidor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Servidor} from "../shared/servidor.model";
import {SetorService} from "../../setores/shared/setor.service";
import {Observable} from "rxjs";
import {Setor} from "../../setores/shared/setor.model";
import {map} from "rxjs/operators";
import {Page} from "../../../shared/models/Pageable.model";

@Component({
  selector: 'app-servidor-form',
  templateUrl: './servidor-form.component.html',
  styleUrls: ['./servidor-form.component.css']
})
export class ServidorFormComponent extends CrudComponent<Servidor,Page<Servidor>> implements OnInit,AfterContentChecked {

  servidor!:Servidor;
  servidorForm!:FormGroup;
  setores!:Setor[];
  constructor(
    private formBuilder: FormBuilder,
    protected setorService: SetorService,
    protected servidorService: ServidorService,
    protected route:ActivatedRoute,
    protected router:Router
  ) {
    super(servidorService,route,router);
    super.setListPath('servidores');
  }
  private carregaSetores() :Observable<any> {
      return this.setorService.getAll().pipe(
        map( (setores)=> {
         this.setores = <Setor[]> setores;
        })
      );
  }
  private carregarServidor() :void {
    super.load().subscribe(servidor => {
      this.servidor = servidor;
      this.servidorForm.patchValue(servidor);
      this.servidorForm.get('setorId')?.setValue(servidor.setor.id);
    });
  }
  private buildServidorForm() :void {
    this.servidorForm =  this.formBuilder.group({
      id:[null],
      nome: [ null , [Validators.required,Validators.minLength(2)]],
      descricao: [ null , [Validators.required,Validators.minLength(2)]],
      setorId: [ null , [Validators.required]],
    });
  }

  ngOnInit() {
    super.ngOnInit();
    this.buildServidorForm();
    super.setForm(this.servidorForm);
    this.carregaSetores().subscribe(
      () => {
        this.carregarServidor()
      }
    );
  }
}
