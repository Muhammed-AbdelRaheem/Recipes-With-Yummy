import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor( private _http:HttpClient) { }
baseURL:string = `https://www.themealdb.com/api/json/v1/1/`

getmeals():Observable<any>{
  return this._http.get(this.baseURL+`search.php?s=`)
}


getMealDetails(id:string):Observable<any>{
  return this._http.get(this.baseURL+`lookup.php?i=${id}`)
}






}
