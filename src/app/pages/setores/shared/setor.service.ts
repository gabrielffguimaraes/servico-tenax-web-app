import { Injectable } from '@angular/core';
import {Observable,throwError} from "rxjs";
import {map,flatMap,catchError} from "rxjs/operators";
import {Setor} from "./setor.model";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private apiPath: string = "api/setores";

  constructor(private http:HttpClient) {}

  getAll(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.apiPath).pipe(
      map(this.jsonDataToSetores)
    )
    /*return this.http.get<Setor[]>(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )*/
  }
  getById(id: number): Observable<Setor> {
    return this.http.get(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToSetor)
    );
  }
  create(setor: Setor): Observable<Setor> {
    return this.http.post(this.apiPath,setor).pipe(
      catchError(this.handleError),
      map(this.jsonDataToSetor)
    )
  }
  update(setor: Setor): Observable<Setor> {
    return this.http.put(`${this.apiPath}/${setor.id}`,setor).pipe(
      catchError(this.handleError),
      map(() => setor)
    )
  }
  delete(id:number): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }
  private jsonDataToSetores(jsonData: any[]): Setor[] {
    const setores: Setor[] = [];
    jsonData.forEach(element => setores.push(element as Setor))
    return setores;
  }
  private jsonDataToSetor(jsonData: any): Setor {
    return jsonData as Setor;
  }
  private handleError(error: any): Observable<any> {
    console.log(" ERRO NA REQUISIÇÃO => "+error);
    return throwError(error)
  }
}
