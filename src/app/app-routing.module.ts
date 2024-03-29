import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CategoryComponent } from './Component/category/category.component';
import { AreaComponent } from './Component/area/area.component';
import { IngredientsComponent } from './Component/ingredients/ingredients.component';
import { ContactComponent } from './Component/contact/contact.component';
import { SearchComponent } from './Component/search/search.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { MealDetailsComponent } from './Component/meal-details/meal-details.component';
import { CategorymealsComponent } from './Component/categorymeals/categorymeals.component';
import { AreaMealsComponent } from './Component/area-meals/area-meals.component';
import { IngredientMealsComponent } from './Component/ingredient-meals/ingredient-meals.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent,title:'Home'},
  {path: 'mealdetails/:id', component:MealDetailsComponent,title:'Meal-Details'},
  {path: 'category', component:CategoryComponent,title:'Category'},
  {path: 'categorymeals/:name', component:CategorymealsComponent,title:'Category-Meals'},
  {path: 'area', component:AreaComponent,title:'Area'},
  {path: 'areameals/:name', component:AreaMealsComponent,title:'Area-Meals'},
  {path: 'Ingredients', component:IngredientsComponent,title:'Ingredients'},
  {path: 'Ingredientmeals/:name', component:IngredientMealsComponent,title:'Ingredient-Meals'},
  {path: 'contact', component:ContactComponent,title:'Contact'},
  {path: 'search', component:SearchComponent, title:'Search'},
  {path: '**', component:NotfoundComponent,title:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
