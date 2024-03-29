import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { CategoryComponent } from './Component/category/category.component';
import { AreaComponent } from './Component/area/area.component';
import { IngredientsComponent } from './Component/ingredients/ingredients.component';
import { ContactComponent } from './Component/contact/contact.component';
import { SearchComponent } from './Component/search/search.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MealDetailsComponent } from './Component/meal-details/meal-details.component';
import { CuttextPipe } from './pipes/cuttext.pipe';
import { CategorymealsComponent } from './Component/categorymeals/categorymeals.component';
import { AreaMealsComponent } from './Component/area-meals/area-meals.component';
import { IngredientMealsComponent } from './Component/ingredient-meals/ingredient-meals.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    AreaComponent,
    IngredientsComponent,
    ContactComponent,
    SearchComponent,
    NotfoundComponent,
    MealDetailsComponent,
    CuttextPipe,
    CategorymealsComponent,
    AreaMealsComponent,
    IngredientMealsComponent,
    SearchPipe,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule


  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
