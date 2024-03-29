import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/Service/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  constructor(private _IngredientService: IngredientService) { }

  Ingredients:any[]=[]
  ngOnInit(): void {
    this._IngredientService.getIngredients().subscribe({
      next: data => { 
        this.Ingredients=data.meals
        // console.log(data.meals) 
      }
      , error: error => { console.log(error) }
    })
  }
}
