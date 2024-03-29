import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private _http:HttpClient) { }
  baseURL:string = `https://www.themealdb.com/api/json/v1/1/`

  getAreas():Observable<any>{
    return this._http.get(this.baseURL+`list.php?a=list`)
  }

  getAreaMeals(name:string):Observable<any>{
    return this._http.get(this.baseURL+`filter.php?a=${name}`)
  }
}
