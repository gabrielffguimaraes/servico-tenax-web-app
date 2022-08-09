import { Injectable } from '@angular/core';
import {Observable,throwError} from "rxjs";
import {map,flatMap,catchError} from "rxjs/operators";
import {Setor} from "./setor.model";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";
import {Error} from "../../../shared/models/Error.model";

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private URL_BASE_API = `${environment.URL_BASE}${environment.API}`;
  private apiPath: string = `${this.URL_BASE_API}/setor`;

  constructor(private http:HttpClient) {}

  getAll(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.apiPath).pipe(
      map((s: Setor[]) => s)
    )
  }
  getById(id: number): Observable<Setor> {
    return this.http.get(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(s => s)
    );
  }
  create(setor: Setor): Observable<Setor> {
    return this.http.post(this.apiPath,setor).pipe(
      catchError(this.handleError),
      map((s) => s)
    )
  }
  update(setor: Setor): Observable<Setor> {
    return this.http.put(`${this.apiPath}/${setor.id}`,setor).pipe(
      catchError(this.handleError),
      map(s => s)
    )
  }
  delete(id:number): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private handleError(errorHandler: any): Observable<any> {
    errorHandler.error.errors = errorHandler.error.errors.map((err: string) => new Error(err))
    return throwError(errorHandler)
  }
}
