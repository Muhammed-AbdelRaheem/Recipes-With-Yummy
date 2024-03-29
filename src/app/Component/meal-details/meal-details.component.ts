import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from 'src/app/Service/meals.service';


@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  constructor(private _MealsService: MealsService, private _ActivatedRoute: ActivatedRoute) { }

  id: any = ''
  mealDetails: any = ''
  Ingredients: string[] = []
  desc: string=''
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: params => {
        this.id = params.get('id')
        // console.log(this.id);

      }
    })

    this._MealsService.getMealDetails(this.id).subscribe({
      next: res => {
        // console.log(res.meals)
        this.mealDetails = res.meals
        for (let i = 1; i <= 20; i++) {
          if (this.mealDetails[0][`strIngredient${i}`] != "") {
            this.Ingredients.push(this.mealDetails[0][`strIngredient${i}`])

          }
        }

      },
      error: err => {
        console.log(err)
      },
  
 
    })
  }

 

}
