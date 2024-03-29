import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  baseURL:string = `https://www.themealdb.com/api/json/v1/1/`
  
  constructor(private _http:HttpClient) { }
  

  getCategories():Observable<any>{
    return this._http.get(this.baseURL+'categories.php');
  }

  getCategoryMeals(name:string):Observable<any>{
    return this._http.get(this.baseURL+`filter.php?c=${name}`);
  }
}
