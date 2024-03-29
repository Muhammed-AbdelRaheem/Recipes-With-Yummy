import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/Service/meals.service';
import { Meals } from 'src/app/interface/meals';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private _MealsService :MealsService){}
  meals:Meals[]=[]
  inputsearchName:string=''

  ngOnInit(): void {
    this._MealsService.getmeals().subscribe({
      next:(data)=>{
        console.log(data.meals);
        this.meals=data.meals
      },
      error:(err)=>{
        console.log(err);
      }
    })
    }


}
