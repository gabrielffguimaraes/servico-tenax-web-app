"use strict";(self.webpackChunktenax=self.webpackChunktenax||[]).push([[958],{5958:(R,u,n)=>{n.r(u),n.d(u,{SetoresModule:()=>w});var d=n(8583),a=n(2955),p=n(8002),f=n(9484),b=n(7519),v=n(3190),e=n(639),g=n(6067),s=n(665);const A=function(r){return[r,"edit"]};function T(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"small",17),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"td",14),e.TgZ(8,"button",18),e._uU(9,"Editar"),e.qZA(),e.TgZ(10,"button",19),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().deleteSetor(l)}),e._uU(11,"Excluir"),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=i.$implicit;e.xp6(3),e.Oqu(t.descricao),e.xp6(3),e.AsE("",t.uf," - ",t.descricao,""),e.xp6(2),e.Q6J("routerLink",e.VKq(4,A,t.id))}}let h=(()=>{class r{constructor(t,o){this.setorService=t,this.formBuilder=o}ngOnInit(){var t;this.setorService.getAll().subscribe(o=>this.setores=o,o=>console.log(o)),this.buildFormFilter(),null===(t=this.formFilter.get("descricao-filter"))||void 0===t||t.valueChanges.pipe((0,p.U)(o=>o.trim()),(0,f.b)(200),(0,b.x)(),(0,v.w)(o=>this.setorService.findByDescricao(o))).subscribe(o=>{this.setores=o})}deleteSetor(t){confirm("Deseja realmente excluir ?")&&this.setorService.delete(t.id).subscribe(()=>this.setores=this.setores.filter(o=>o!=t),o=>{let c="";o.error.errors.forEach(l=>{c+=`${l.descricao} \n`}),alert(c)})}buildFormFilter(){this.formFilter=this.formBuilder.group({"descricao-filter":[null]})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.q),e.Y36(s.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-setores-list"]],decls:27,vars:2,consts:[[1,"mt-3","p-4","pb-3","pt-3","mb-5",2,"background-color","rgba(155,155,155,0.1)"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["routerLink","/"],[1,"breadcrumb-item","active"],[1,"row","m-0","p-0","mb-3"],[1,"col-12","col-md-6","p-0"],[1,"col-12","col-md-6","p-0","d-flex","justify-content-end"],["routerLink","new","type","button",1,"btn","btn-success","align-self-center"],[1,"m-0","p-0"],[3,"formGroup"],["formControlName","descricao-filter","id","descricao","type","text","placeholder","Exp: Setor de atendimento",1,"form-control"],[1,"table","table-hover"],[1,"bg-primary","text-white"],[1,"text-center"],[1,"border-top-0"],[4,"ngFor","ngForOf"],[1,"text-muted"],[1,"btn","btn-sm","btn-outline-primary","me-2",3,"routerLink"],[1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"nav",0),e.TgZ(1,"ol",1),e.TgZ(2,"li",2),e.TgZ(3,"a",3),e._uU(4,"Home"),e.qZA(),e.qZA(),e.TgZ(5,"li",4),e._uU(6," Setores "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"h2"),e._uU(10," Setores "),e.qZA(),e.qZA(),e.TgZ(11,"div",7),e.TgZ(12,"a",8),e._uU(13,"+ Novo setor"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",5),e.TgZ(15,"div",9),e.TgZ(16,"form",10),e._UZ(17,"input",11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"table",12),e.TgZ(19,"thead"),e.TgZ(20,"tr",13),e.TgZ(21,"th"),e._uU(22,"Setor"),e.qZA(),e.TgZ(23,"th",14),e._uU(24,"A\xe7\xf5es"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"tbody",15),e.YNc(26,T,12,6,"tr",16),e.qZA(),e.qZA()),2&t&&(e.xp6(16),e.Q6J("formGroup",o.formFilter),e.xp6(10),e.Q6J("ngForOf",o.setores))},directives:[a.yS,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.sg,a.rH],styles:[""]}),r})();const q=new Array({sigla:"AC",descricao:"Acre"},{sigla:"AL",descricao:"Alagoas"},{sigla:"AP",descricao:"Amap\xe1"},{sigla:"AM",descricao:"Amazonas"},{sigla:"BA",descricao:"Bahia"},{sigla:"CE",descricao:"Cear\xe1"},{sigla:"DF",descricao:"Distrito Federal"},{sigla:"ES",descricao:"Esp\xedrito Santo"},{sigla:"GO",descricao:"Goi\xe1s"},{sigla:"MA",descricao:"Maranh\xe3o"},{sigla:"MT",descricao:"Mato Grosso"},{sigla:"MS",descricao:"Mato Grosso do Sul"},{sigla:"MG",descricao:"Minas Gerais"},{sigla:"PA",descricao:"Par\xe1"},{sigla:"PB",descricao:"Para\xedba"},{sigla:"PR",descricao:"Paran\xe1"},{sigla:"PE",descricao:"Pernambuco"},{sigla:"PI",descricao:"Piau\xed"},{sigla:"RJ",descricao:"Rio de Janeiro"},{sigla:"RN",descricao:"Rio Grande do Norte"},{sigla:"RS",descricao:"Rio Grande do Sul"},{sigla:"RO",descricao:"Rond\xf4nia"},{sigla:"RR",descricao:"Roraima"},{sigla:"SC",descricao:"Santa Catarina"},{sigla:"SP",descricao:"S\xe3o Paulo"},{sigla:"SE",descricao:"Sergipe"},{sigla:"TO",descricao:"Tocantins"});let S=(()=>{class r{constructor(){}static pegaListaEstados(){return q}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var F=n(1868),_=n(6800),C=n(3772);function U(r,i){if(1&r&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.xp6(1),e.hij(" ",t.descricao," ")}}function x(r,i){if(1&r&&(e.TgZ(0,"div",31),e.YNc(1,U,2,1,"li",32),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.errors)}}function y(r,i){if(1&r&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&r){const t=i.$implicit;e.Q6J("value",t.sigla),e.xp6(1),e.Oqu(t.descricao)}}function E(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"th",38),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e.TgZ(8,"button",39),e._UZ(9,"i",40),e.qZA(),e.TgZ(10,"button",41),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw(2).deleteServidor(l)}),e._UZ(11,"i",42),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=i.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.nome),e.xp6(2),e.Oqu(t.descricao),e.xp6(2),e.MGl("routerLink","/servidores/",t.id,"/edit")}}function J(r,i){if(1&r&&(e.TgZ(0,"div",34),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e.TgZ(3,"h3"),e._UZ(4,"i",35),e._uU(5," Servidores "),e.qZA(),e.qZA(),e.TgZ(6,"table",36),e.TgZ(7,"thead"),e.TgZ(8,"tr"),e.TgZ(9,"th",37),e._uU(10,"#"),e.qZA(),e.TgZ(11,"th",37),e._uU(12,"Nome"),e.qZA(),e.TgZ(13,"th",37),e._uU(14,"Descri\xe7\xe3o"),e.qZA(),e._UZ(15,"th",37),e.qZA(),e.qZA(),e.TgZ(16,"tbody"),e.YNc(17,E,12,4,"tr",32),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r){const t=e.oxw();e.xp6(17),e.Q6J("ngForOf",t.setor.servidor)}}const L=function(r){return{"is-invalid":r}},M=function(r,i){return{"btn-success":r,"btn-primary":i}};let Z=(()=>{class r extends F.D{constructor(t,o,c,l,m){super(c,l,m),this.formBuilder=t,this.servidorService=o,this.setorService=c,this.route=l,this.router=m,super.setListPath("setores")}carregarSetor(){super.load().subscribe(t=>{this.setor=t,this.setorForm.patchValue(t)})}carregarEstados(){this.estados=S.pegaListaEstados()}buildSetorForm(){this.setorForm=this.formBuilder.group({id:[null],descricao:[null,[s.kI.required,s.kI.minLength(2)]],uf:[null,s.kI.required]})}deleteServidor(t){confirm("Deseja realmente excluir este Servidor?")&&this.servidorService.delete(t.id).subscribe(()=>this.setor.servidor=this.setor.servidor.filter(o=>o!=t),()=>alert("Erro ao deletar servidor"))}ngOnInit(){super.ngOnInit(),this.carregarEstados(),this.carregarSetor(),this.buildSetorForm(),super.setForm(this.setorForm)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(_.L),e.Y36(g.q),e.Y36(a.gz),e.Y36(a.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-setor-form"]],features:[e.qOj],decls:44,vars:19,consts:[[1,"mt-3","p-4","pb-3","pt-3","mb-5",2,"background-color","rgba(155,155,155,0.1)"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["routerLink","/"],["routerLink","/setores"],[1,"breadcrumb-item","active"],[1,"row"],[1,"row","col-md-6","m-0"],[1,"m-0","p-0","mb-3"],[1,"col-12","p-0"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"p-0",3,"formGroup","ngSubmit"],[1,"card"],[1,"card-body"],[1,"mb-3","row"],["for","id",1,"col-2","col-form-label"],[1,"col-2"],["type","text","formControlName","id","readonly","","id","id",1,"form-control",3,"value"],["for","descricao",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["id","descricao","type","text","formControlName","descricao","placeholder","Exp: Setor de atendimento",1,"form-control",3,"ngClass"],[3,"fm","name","label"],[1,"mb-12","row"],["for","uf",1,"col-sm-2","col-form-label"],["id","uf","formControlName","uf","aria-label","form-select-lg",1,"form-select","form-select","mb-3"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","m-0","p-0"],["type","submit",1,"btn","align-self-center","w-auto","mt-3",3,"disabled","ngClass"],["routerLink","/setores","type","button",1,"btn","w-auto","mt-3","btn-light","ms-2"],[1,"bi","bi-arrow-left"],["class","row col-md-6 m-0 mt-md-0 mt-5",4,"ngIf"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"],[3,"value"],[1,"row","col-md-6","m-0","mt-md-0","mt-5"],[1,"bi","bi-people-fill"],[1,"table","table-striped-columns"],["scope","col"],["scope","row"],["title","Alterar servidor",1,"btn","btn-sm","btn-primary","me-2",3,"routerLink"],[1,"bi","bi-pencil-square"],["title","Excluir servidor",1,"btn","btn-sm","btn-danger",3,"click"],[1,"bi","bi-trash3"]],template:function(t,o){1&t&&(e.TgZ(0,"nav",0),e.TgZ(1,"ol",1),e.TgZ(2,"li",2),e.TgZ(3,"a",3),e._uU(4,"Home"),e.qZA(),e.qZA(),e.TgZ(5,"li",2),e.TgZ(6,"a",4),e._uU(7,"Setores"),e.qZA(),e.qZA(),e.TgZ(8,"li",5),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"div",7),e.TgZ(12,"div",8),e.TgZ(13,"div",9),e.TgZ(14,"h2"),e._uU(15),e.qZA(),e.qZA(),e.qZA(),e.YNc(16,x,2,1,"div",10),e.TgZ(17,"form",11),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(18,"div",12),e.TgZ(19,"div",13),e.TgZ(20,"div",14),e.TgZ(21,"label",15),e._uU(22,"ID"),e.qZA(),e.TgZ(23,"div",16),e._UZ(24,"input",17),e.qZA(),e.qZA(),e.TgZ(25,"div",14),e.TgZ(26,"label",18),e._uU(27,"Descri\xe7\xe3o *"),e.qZA(),e.TgZ(28,"div",19),e._UZ(29,"input",20),e._UZ(30,"app-error",21),e.qZA(),e.qZA(),e.TgZ(31,"div",22),e.TgZ(32,"label",23),e._uU(33,"UF *"),e.qZA(),e.TgZ(34,"div",19),e.TgZ(35,"select",24),e.YNc(36,y,2,2,"option",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",26),e.TgZ(38,"button",27),e._uU(39),e.qZA(),e.TgZ(40,"a",28),e._UZ(41,"i",29),e._uU(42," Voltar "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(43,J,18,1,"div",30),e.qZA()),2&t&&(e.xp6(9),e.hij(" ",o.crumbTitle," "),e.xp6(6),e.hij(" ",o.pageTitle," setor "),e.xp6(1),e.Q6J("ngIf",o.errors.length>0),e.xp6(1),e.Q6J("formGroup",o.setorForm),e.xp6(7),e.Q6J("value",null==o.setor?null:o.setor.id),e.xp6(5),e.Q6J("ngClass",e.VKq(14,L,o.validations.validField("descricao",o.setorForm))),e.xp6(1),e.Q6J("fm",o.setorForm)("name","descricao")("label","descricao"),e.xp6(6),e.Q6J("ngForOf",o.estados),e.xp6(2),e.Q6J("disabled",o.submitForm||!o.setorForm.valid)("ngClass",e.WLB(16,M,"new"==o.currentAction,"edit"==o.currentAction)),e.xp6(1),e.hij(" ",o.btnSubmit," "),e.xp6(4),e.Q6J("ngIf",null==o.setor?null:o.setor.servidor))},directives:[a.yS,d.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,d.mk,C.q,s.EJ,d.sg,s.YN,s.Kr,a.rH],styles:[""]}),r})();const O=[{path:"",pathMatch:"full",component:h},{path:"new",pathMatch:"full",component:Z},{path:":id/edit",pathMatch:"full",component:Z}];let N=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),r})();var Y=n(4466);let w=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.ez,N,Y.m]]}),r})()}}]);