import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/Service/meals.service';
import { Meals } from 'src/app/interface/meals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

constructor(private _MealsService:MealsService){}
meals:Meals[]=[]

ngOnInit(): void {
this._MealsService.getmeals().subscribe({
  next:(data)=>{
    // console.log(data.meals);
    this.meals=data.meals
  },
  error:(err)=>{
    console.log(err);
  }
})
}
}
