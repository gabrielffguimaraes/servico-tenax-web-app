import { Component, OnInit } from '@angular/core';

import {FormGroup} from "@angular/forms";
import {Error} from "../../models/Error.model";
import {Validations} from "../../validations/form-error.validation";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../services/crud-service.service";
import {switchMap, tap} from "rxjs/operators";
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent<T> implements OnInit {
  form!:FormGroup;

  currentAction!: string;
  pageTitle!: string;
  crumbTitle!: string;
  btnSubmit!: string;
  listPath!:string
  submitForm = false;

  validations:Validations = new Validations();
  errors: Error[] = [];

  protected crudService: CrudService<T>;
  protected route:ActivatedRoute;
  protected router:Router;
  constructor(
              crudService: CrudService<T>,
              route:ActivatedRoute,
              router:Router
  ) {

      this.crudService = crudService;
      this.route = route;
      this.router = router;
  }

  ngOnInit(): void {
    this.setCurrentAction();
  }

  ngAfterContentChecked(): void {
    this.setPageTitles();
  }

  save() :void {
    this.submitForm = false;
    this.currentAction == "new" ? this.create() : this.update();
  }

  // PRIVATE METHODS
  protected load() :Observable<T> {
    if (this.currentAction == 'edit') {
      return this.route.paramMap.pipe(
        switchMap((params) => {
          let id: number = parseInt(<string>params.get("id"));
          return this.crudService.getById(+id);
        })
      )
    } else {
      return EMPTY;
    }
  }
  private create() :void {
    let obj: T = Object.assign({},this.form.value);
    this.crudService.create(obj)
      .subscribe(
        (obj:T) => {
          return this.actionsForSuccess(obj);
        },(error: { error: { errors: Error[]; }; }) => {
          this.actionsForError(error);
        },() => {
          this.submitForm = true;
        });
  }

  private update() :void {
    let obj: T = Object.assign({},this.form.value);
    this.crudService
      .update(obj)
      .subscribe((obj: any) => {
        return this.actionsForSuccess(obj);
      }, (error: { error: { errors: Error[]; }; }) => {
        this.actionsForError(error);
      },() => {
        this.submitForm = true;
      });
  }
  private setCurrentAction() :void {
    this.currentAction = (this.route.snapshot.url[0].path == 'new') ? 'new' : 'edit';
  }
  protected setListPath(listPath:string) {
    this.listPath = listPath;
  }
  protected setForm(form:FormGroup): void {
    this.form = form;
  }
  protected setPageTitles(nome: string | undefined = "") :void {
    if(this.currentAction == 'new') {
      this.pageTitle = "Novo ";
      this.crumbTitle = "Novo"
      this.btnSubmit = "+ Adicionar"
    } else {
      this.pageTitle = "Editar";
      this.crumbTitle = "Editando"
      this.btnSubmit = "Editar"
    }
  }
  private actionsForSuccess(obj: any) :void {
    let message = (this.currentAction == "new") ? "Adicionado com sucesso" : "Alterado com sucesso";
    this.router.navigateByUrl(this.listPath,{skipLocationChange:true}).then(
      () => this.router.navigate([this.listPath,obj['id'],"edit"]).then(()=> { alert(message);})
    )
  }
  private actionsForError(responseError: { error : {errors : Error[]}}) : void {
    this.errors = responseError.error.errors;
  }
}
