import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Estado} from "../../../lists/lista-de-estados";
import {EstadosService} from "../../../shared/services/estados.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SetorService} from "../shared/setor.service";
import {Setor} from "../shared/setor.model";
import {Error} from "../../../shared/models/Error.model";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Helper} from "../../../shared/helpers/Helper.helper";

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent implements OnInit,AfterContentChecked {
  currentAction!: string;
  pageTitle!: string;
  crumbTitle!: string;
  btnSetor!: string;

  setor!: Setor;
  estados!: Estado[];
  setorForm!:FormGroup;
  errors: Error[] = [];

  submitForm: boolean = false;

  constructor(private formBuilder:FormBuilder,
              private setorService: SetorService,
              private route:ActivatedRoute,
              private router:Router
              ) {
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildSetorForm();
    this.carregarSetor();
    this.carregarEstados();
  }

  ngAfterContentChecked(): void {
    this.setPageTitles();
  }

  save() :void {
    this.submitForm = false;
    this.currentAction == "new" ? this.create() : this.update();
  }

  isValidField(field: string) : boolean {
    return <boolean>this.setorForm.get(field)?.valid;
  }

  // PRIVATE METHODS
  private create() :void {
    let setor: Setor = Object.assign(new Setor(),this.setorForm.value);
    this.setorService.create(setor)
      .subscribe(
        (setor) => {
          this.actionsForSuccess(setor);
        },error => {
          this.actionsForError(error);
        },() => {
          this.submitForm = true;
        });
  }

  private update() :void {
    let setor: Setor = Object.assign(new Setor(),this.setorForm.value);
    this.setorService
      .update(setor)
      .subscribe(setor => {
        this.actionsForSuccess(setor);
      }, error => {
        this.actionsForSuccess(error);
      },() => {
        this.submitForm = true;
      });
  }
  private carregarSetor() :void {
    if (this.currentAction == 'edit')
      this.route.paramMap.pipe(
        switchMap((params) => {
          let id:number = parseInt(<string>params.get("id"));
          return this.setorService.getById(+id);
        })
      ).subscribe(setor => {
        this.setor = setor;
        this.setorForm.patchValue(setor);
      })
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
  private setCurrentAction() :void {
    this.currentAction = (this.route.snapshot.url[0].path == 'new') ? 'new' : 'edit';
  }
  private setPageTitles() :void {
    if(this.currentAction == 'new') {
      this.pageTitle = "Novo Setor";
      this.crumbTitle = "Novo"
      this.btnSetor = "+ Adicionar"
    } else {
      this.pageTitle = "Editar";
      this.crumbTitle = "Editando setor : " + Helper.sanitize(this.setor?.descricao)
      this.btnSetor = "Editar"
    }
  }
  private actionsForSuccess(setor: Setor) :void {
    let message = (this.currentAction == "new") ? "Adicionado com sucesso" : "Alterado com sucesso";
    this.router.navigateByUrl("setores",{skipLocationChange:true}).then(
      () => this.router.navigate(["setores",setor.id,"edit"]).then(()=> { alert(message);})
    )
  }
  private actionsForError(responseError: { error : {errors : Error[]}}) : void {
    this.errors = responseError.error.errors;
  }
}
