import { Injectable } from '@angular/core';
import {Observable,throwError} from "rxjs";
import {map,flatMap,catchError} from "rxjs/operators";
import {Category} from "./category.model";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = "api/categories";

  constructor(private http:HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiPath).pipe(
      map(this.jsonDataToCategories)
    )
    /*return this.http.get<Category[]>(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )*/
  }
  getById(id: number): Observable<Category> {
    return this.http.get(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    );
  }
  create(category: Category): Observable<Category> {
    return this.http.post(this.apiPath,category).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }
  update(category: Category): Observable<Category> {
    return this.http.put(`${this.apiPath}/${category.id}`,category).pipe(
      catchError(this.handleError),
      map(() => category)
    )
  }
  delete(id:number): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }
  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category))
    return categories;
  }
  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }
  private handleError(error: any): Observable<any> {
    console.log(" ERRO NA REQUISIÇÃO => "+error);
    return throwError(error)
  }
}
