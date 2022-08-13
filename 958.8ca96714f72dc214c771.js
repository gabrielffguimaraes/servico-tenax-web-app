"use strict";var R=Object.defineProperty,D=(m,c,a)=>c in m?R(m,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):m[c]=a,i=(m,c,a)=>(D(m,"symbol"!=typeof c?c+"":c,a),a);(self.webpackChunktenax=self.webpackChunktenax||[]).push([[958],{5958:(m,c,a)=>{a.r(c),a.d(c,{SetoresModule:()=>b});var Z=a(8583),l=a(2955),U=a(8002),_=a(9484),C=a(7519),y=a(3190),t=a(639);const F=new Array({sigla:"AC",descricao:"Acre"},{sigla:"AL",descricao:"Alagoas"},{sigla:"AP",descricao:"Amap\xe1"},{sigla:"AM",descricao:"Amazonas"},{sigla:"BA",descricao:"Bahia"},{sigla:"CE",descricao:"Cear\xe1"},{sigla:"DF",descricao:"Distrito Federal"},{sigla:"ES",descricao:"Esp\xedrito Santo"},{sigla:"GO",descricao:"Goi\xe1s"},{sigla:"MA",descricao:"Maranh\xe3o"},{sigla:"MT",descricao:"Mato Grosso"},{sigla:"MS",descricao:"Mato Grosso do Sul"},{sigla:"MG",descricao:"Minas Gerais"},{sigla:"PA",descricao:"Par\xe1"},{sigla:"PB",descricao:"Para\xedba"},{sigla:"PR",descricao:"Paran\xe1"},{sigla:"PE",descricao:"Pernambuco"},{sigla:"PI",descricao:"Piau\xed"},{sigla:"RJ",descricao:"Rio de Janeiro"},{sigla:"RN",descricao:"Rio Grande do Norte"},{sigla:"RS",descricao:"Rio Grande do Sul"},{sigla:"RO",descricao:"Rond\xf4nia"},{sigla:"RR",descricao:"Roraima"},{sigla:"SC",descricao:"Santa Catarina"},{sigla:"SP",descricao:"S\xe3o Paulo"},{sigla:"SE",descricao:"Sergipe"},{sigla:"TO",descricao:"Tocantins"}),A=class{constructor(){}static pegaListaEstados(){return F}retornaEstado(e){return F.find(r=>r.sigla==e)}};let g=A;i(g,"\u0275fac",function(r){return new(r||A)}),i(g,"\u0275prov",t.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"}));var x=a(6067),n=a(665);const E=function(s){return[s,"edit"]};function J(s,e){if(1&s){const r=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"small",18),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"td",19),t.TgZ(8,"button",20),t.TgZ(9,"span",21),t._UZ(10,"i",22),t.qZA(),t.TgZ(11,"span",9),t._uU(12,"Editar"),t.qZA(),t.qZA(),t.TgZ(13,"button",23),t.NdJ("click",function(){const u=t.CHM(r).$implicit;return t.oxw().deleteSetor(u)}),t.TgZ(14,"span",21),t._UZ(15,"i",24),t.qZA(),t.TgZ(16,"span",9),t._uU(17,"Excluir"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const r=e.$implicit,o=t.oxw();t.xp6(3),t.Oqu(r.descricao),t.xp6(3),t.AsE("",r.uf," - ",o.retornaEstado(r.uf).descricao,""),t.xp6(2),t.Q6J("routerLink",t.VKq(4,E,r.id))}}const v=class{constructor(e,r,o){i(this,"estadoService"),i(this,"setorService"),i(this,"formBuilder"),i(this,"setores"),i(this,"formFilter"),this.estadoService=e,this.setorService=r,this.formBuilder=o}ngOnInit(){this.setorService.getAll().subscribe(e=>this.setores=e,e=>console.log(e)),this.buildFormFilter(),this.formFilter.get("descricao-filter")?.valueChanges.pipe((0,U.U)(e=>e.trim()),(0,_.b)(200),(0,C.x)(),(0,y.w)(e=>this.setorService.findByDescricao(e))).subscribe(e=>{this.setores=e})}retornaEstado(e){return this.estadoService.retornaEstado(e)}deleteSetor(e){confirm("Deseja realmente excluir ?")&&this.setorService.delete(e.id).subscribe(()=>this.setores=this.setores.filter(r=>r!=e),r=>{let o="";r.error.errors.forEach(d=>{o+=`${d.descricao} \n`}),alert(o)})}buildFormFilter(){this.formFilter=this.formBuilder.group({"descricao-filter":[null]})}};let T=v;i(T,"\u0275fac",function(r){return new(r||v)(t.Y36(g),t.Y36(x.q),t.Y36(n.qu))}),i(T,"\u0275cmp",t.Xpm({type:v,selectors:[["app-setores-list"]],decls:29,vars:2,consts:[[1,"mt-3","p-4","pb-3","pt-3","mb-3","mb-md-5",2,"background-color","rgba(155,155,155,0.1)"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["routerLink","/"],[1,"breadcrumb-item","active"],[1,"row","m-0","p-0","mb-3"],[1,"col-6","p-0"],[1,"col-6","p-0","d-flex","justify-content-end"],["routerLink","new","type","button",1,"btn","btn-success","align-self-center","d-flex"],[1,"d-none","d-sm-block"],[1,"m-0","p-0"],[3,"formGroup"],["formControlName","descricao-filter","id","descricao","type","text","placeholder","Exp: Setor de atendimento",1,"form-control"],[1,"table","table-hover"],[1,"bg-primary","text-white"],[1,"text-center"],[1,"border-top-0"],[4,"ngFor","ngForOf"],[1,"text-muted"],[1,"text-center","btn-actions"],[1,"btn","btn-sm","btn-outline-primary","me-2",3,"routerLink"],[1,"d-block","d-sm-none"],[1,"bi","bi-pencil-square"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"bi","bi-trash3-fill"]],template:function(r,o){1&r&&(t.TgZ(0,"nav",0),t.TgZ(1,"ol",1),t.TgZ(2,"li",2),t.TgZ(3,"a",3),t._uU(4,"Home"),t.qZA(),t.qZA(),t.TgZ(5,"li",4),t._uU(6," Setores "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.TgZ(9,"h2"),t._uU(10," Setores "),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"a",8),t._uU(13,"+ Novo \xa0"),t.TgZ(14,"span",9),t._uU(15,"setor"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",5),t.TgZ(17,"div",10),t.TgZ(18,"form",11),t._UZ(19,"input",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"table",13),t.TgZ(21,"thead"),t.TgZ(22,"tr",14),t.TgZ(23,"th"),t._uU(24,"Setor"),t.qZA(),t.TgZ(25,"th",15),t._uU(26,"A\xe7\xf5es"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"tbody",16),t.YNc(28,J,18,6,"tr",17),t.qZA(),t.qZA()),2&r&&(t.xp6(18),t.Q6J("formGroup",o.formFilter),t.xp6(10),t.Q6J("ngForOf",o.setores))},directives:[l.yS,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,Z.sg,l.rH],styles:[""]}));var L=a(1868),O=a(6800),w=a(3772);function N(s,e){if(1&s&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&s){const r=e.$implicit;t.xp6(1),t.hij(" ",r.descricao," ")}}function Y(s,e){if(1&s&&(t.TgZ(0,"div",32),t.YNc(1,N,2,1,"li",33),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",r.errors)}}function B(s,e){if(1&s&&(t.TgZ(0,"option",34),t._uU(1),t.qZA()),2&s){const r=e.$implicit;t.Q6J("value",r.sigla),t.xp6(1),t.Oqu(r.descricao)}}function k(s,e){if(1&s){const r=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",39),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",40),t.TgZ(8,"button",41),t._UZ(9,"i",42),t.qZA(),t.TgZ(10,"button",43),t.NdJ("click",function(){const u=t.CHM(r).$implicit;return t.oxw(2).deleteServidor(u)}),t._UZ(11,"i",44),t.qZA(),t.qZA(),t.qZA()}if(2&s){const r=e.$implicit;t.xp6(2),t.Oqu(r.id),t.xp6(2),t.Oqu(r.nome),t.xp6(2),t.Oqu(r.descricao),t.xp6(2),t.MGl("routerLink","/servidores/",r.id,"/edit")}}function P(s,e){if(1&s&&(t.TgZ(0,"div",35),t.TgZ(1,"div",8),t.TgZ(2,"div",9),t.TgZ(3,"h3"),t._UZ(4,"i",36),t._uU(5," Servidores "),t.qZA(),t.qZA(),t.TgZ(6,"table",37),t.TgZ(7,"thead"),t.TgZ(8,"tr"),t.TgZ(9,"th",38),t._uU(10,"#"),t.qZA(),t.TgZ(11,"th",38),t._uU(12,"Nome"),t.qZA(),t.TgZ(13,"th",38),t._uU(14,"Descri\xe7\xe3o"),t.qZA(),t._UZ(15,"th",38),t.qZA(),t.qZA(),t.TgZ(16,"tbody"),t.YNc(17,k,12,4,"tr",33),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&s){const r=t.oxw();t.xp6(17),t.Q6J("ngForOf",r.setor.servidor)}}const Q=function(s){return{"is-invalid":s}},G=function(s,e){return{"btn-success":s,"btn-primary":e}},q=class extends L.D{constructor(e,r,o,d,u){super(o,d,u),i(this,"formBuilder"),i(this,"servidorService"),i(this,"setorService"),i(this,"route"),i(this,"router"),i(this,"setor"),i(this,"setorForm"),i(this,"estados"),this.formBuilder=e,this.servidorService=r,this.setorService=o,this.route=d,this.router=u,super.setListPath("setores")}carregarSetor(){super.load().subscribe(e=>{this.setor=e,this.setorForm.patchValue(e)})}carregarEstados(){this.estados=g.pegaListaEstados()}buildSetorForm(){this.setorForm=this.formBuilder.group({id:[null],descricao:[null,[n.kI.required,n.kI.minLength(2)]],uf:[null,n.kI.required]})}deleteServidor(e){confirm("Deseja realmente excluir este Servidor?")&&this.servidorService.delete(e.id).subscribe(()=>this.setor.servidor=this.setor.servidor.filter(r=>r!=e),()=>alert("Erro ao deletar servidor"))}ngOnInit(){super.ngOnInit(),this.carregarEstados(),this.carregarSetor(),this.buildSetorForm(),super.setForm(this.setorForm)}};let p=q;i(p,"\u0275fac",function(r){return new(r||q)(t.Y36(n.qu),t.Y36(O.L),t.Y36(x.q),t.Y36(l.gz),t.Y36(l.F0))}),i(p,"\u0275cmp",t.Xpm({type:q,selectors:[["app-setor-form"]],features:[t.qOj],decls:44,vars:19,consts:[[1,"mt-3","p-4","pb-3","pt-3","mb-3","mb-md-5",2,"background-color","rgba(155,155,155,0.1)"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["routerLink","/"],["routerLink","/setores"],[1,"breadcrumb-item","active"],[1,"row"],[1,"row","col-md-6","m-0","align-self-start"],[1,"m-0","p-0","mb-3"],[1,"col-12","p-0"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"p-0",3,"formGroup","ngSubmit"],[1,"card"],[1,"card-body"],[1,"mb-3","d-flex","align-items-center"],["for","id",1,"me-3","me-sm-0","col-sm-2"],[2,"width","70px"],["type","text","formControlName","id","readonly","","id","id",1,"form-control","ms-1",3,"value"],[1,"mb-3","row"],["for","descricao",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","descricao","type","text","formControlName","descricao","placeholder","Exp: Setor de atendimento",1,"form-control",3,"ngClass"],[3,"fm","name","label"],[1,"mb-12","row"],["for","uf",1,"col-sm-2","col-form-label"],["id","uf","formControlName","uf","aria-label","form-select-lg",1,"form-select","form-select","mb-3"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","m-0","p-0"],["type","submit",1,"btn","align-self-center","w-auto","mt-3",3,"disabled","ngClass"],["routerLink","/setores","type","button",1,"btn","w-auto","mt-3","btn-light","ms-2"],[1,"bi","bi-arrow-left"],["class","row col-md-6 m-0 mt-md-0 mt-5",4,"ngIf"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"],[3,"value"],[1,"row","col-md-6","m-0","mt-md-0","mt-5"],[1,"bi","bi-people-fill"],[1,"table","table-striped-columns"],["scope","col"],["scope","row"],["width","90"],["title","Alterar servidor",1,"btn","btn-sm","btn-primary","me-2",3,"routerLink"],[1,"bi","bi-pencil-square"],["title","Excluir servidor",1,"btn","btn-sm","btn-danger",3,"click"],[1,"bi","bi-trash3"]],template:function(r,o){1&r&&(t.TgZ(0,"nav",0),t.TgZ(1,"ol",1),t.TgZ(2,"li",2),t.TgZ(3,"a",3),t._uU(4,"Home"),t.qZA(),t.qZA(),t.TgZ(5,"li",2),t.TgZ(6,"a",4),t._uU(7,"Setores"),t.qZA(),t.qZA(),t.TgZ(8,"li",5),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"h2"),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.YNc(16,Y,2,1,"div",10),t.TgZ(17,"form",11),t.NdJ("ngSubmit",function(){return o.save()}),t.TgZ(18,"div",12),t.TgZ(19,"div",13),t.TgZ(20,"div",14),t.TgZ(21,"label",15),t._uU(22,"ID"),t.qZA(),t.TgZ(23,"div",16),t._UZ(24,"input",17),t.qZA(),t.qZA(),t.TgZ(25,"div",18),t.TgZ(26,"label",19),t._uU(27,"Descri\xe7\xe3o *"),t.qZA(),t.TgZ(28,"div",20),t._UZ(29,"input",21),t._UZ(30,"app-error",22),t.qZA(),t.qZA(),t.TgZ(31,"div",23),t.TgZ(32,"label",24),t._uU(33,"UF *"),t.qZA(),t.TgZ(34,"div",20),t.TgZ(35,"select",25),t.YNc(36,B,2,2,"option",26),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",27),t.TgZ(38,"button",28),t._uU(39),t.qZA(),t.TgZ(40,"a",29),t._UZ(41,"i",30),t._uU(42," Voltar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(43,P,18,1,"div",31),t.qZA()),2&r&&(t.xp6(9),t.hij(" ",o.crumbTitle," "),t.xp6(6),t.hij(" ",o.pageTitle," setor "),t.xp6(1),t.Q6J("ngIf",o.errors.length>0),t.xp6(1),t.Q6J("formGroup",o.setorForm),t.xp6(7),t.Q6J("value",null==o.setor?null:o.setor.id),t.xp6(5),t.Q6J("ngClass",t.VKq(14,Q,o.validations.validField("descricao",o.setorForm))),t.xp6(1),t.Q6J("fm",o.setorForm)("name","descricao")("label","descricao"),t.xp6(6),t.Q6J("ngForOf",o.estados),t.xp6(2),t.Q6J("disabled",o.submitForm||!o.setorForm.valid)("ngClass",t.WLB(16,G,"new"==o.currentAction,"edit"==o.currentAction)),t.xp6(1),t.hij(" ",o.btnSubmit," "),t.xp6(4),t.Q6J("ngIf",null==o.setor?null:o.setor.servidor))},directives:[l.yS,Z.O5,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,Z.mk,w.q,n.EJ,Z.sg,n.YN,n.Kr,l.rH],styles:[""]}));const I=[{path:"",pathMatch:"full",component:T},{path:"new",pathMatch:"full",component:p},{path:":id/edit",pathMatch:"full",component:p}],h=class{};let f=h;i(f,"\u0275fac",function(r){return new(r||h)}),i(f,"\u0275mod",t.oAB({type:h})),i(f,"\u0275inj",t.cJS({imports:[[l.Bz.forChild(I)],l.Bz]}));var M=a(4466);const S=class{};let b=S;i(b,"\u0275fac",function(r){return new(r||S)}),i(b,"\u0275mod",t.oAB({type:S})),i(b,"\u0275inj",t.cJS({imports:[[Z.ez,f,M.m]]}))}}]);