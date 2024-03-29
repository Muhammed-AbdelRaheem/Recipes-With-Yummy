import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  baseURL:string = `https://www.themealdb.com/api/json/v1/1/`

  constructor( private _http:HttpClient) { }

  getIngredients():Observable<any>{
    return this._http.get(this.baseURL+'list.php?i=list');
  }


  

  getIngredientMeals(name:string):Observable<any>{
    return this._http.get(this.baseURL+`filter.php?i=${name}`);
  }
}
