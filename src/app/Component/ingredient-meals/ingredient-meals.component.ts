import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from 'src/app/Service/ingredient.service';

@Component({
  selector: 'app-ingredient-meals',
  templateUrl: './ingredient-meals.component.html',
  styleUrls: ['./ingredient-meals.component.css']
})
export class IngredientMealsComponent implements OnInit {

  Ingredient: any = ''
  Ingredientdata: any[] = []
  constructor(private _IngredientService: IngredientService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => { this.Ingredient = params.get('name') })


    this._IngredientService.getIngredientMeals(this.Ingredient).subscribe({
      next: data => {
        this.Ingredientdata=data.meals
        // console.log(this.Ingredientdata);
      },
      error: err => {
        console.log(err);
      }
    })
  }


}
