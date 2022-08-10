
import {Observable, of, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {catchError, map} from "rxjs/operators";
import {Error} from "../models/Error.model";
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {
  protected URL_BASE_API = `${environment.URL_BASE}${environment.API}`;
  protected apiPath: string = this.URL_BASE_API;

  constructor(protected http:HttpClient) {}

  setAPIPath(path:string = 'setor') {
    this.apiPath = `${this.apiPath}/${path}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiPath).pipe(
      map((s: T[]) => s)
    )
  }
  getById(id: number): Observable<T> {
    return this.http.get(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(s => s)
    );
  }
  create(obj: T): Observable<T> {
    return this.http.post(this.apiPath,obj).pipe(
      catchError(this.handleError),
      map((s) => s)
    )
  }
  update(obj: any): Observable<T> {
    return this.http.put(`${this.apiPath}/${obj?.id}`,obj).pipe(
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
