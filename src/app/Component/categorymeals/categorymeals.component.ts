import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Service/categories.service';

@Component({
  selector: 'app-categorymeals',
  templateUrl: './categorymeals.component.html',
  styleUrls: ['./categorymeals.component.css']
})
export class CategorymealsComponent implements OnInit    {
  constructor(private _CategoriesService:CategoriesService ,private ActivatedRoute:ActivatedRoute){}
  categoryname:any=''
  categories:any[]=[]
  ngOnInit(): void {

  this.ActivatedRoute.paramMap.subscribe({
      next: params => {
        this.categoryname = params.get('name')
        // console.log(this.categoryname);
  }})
  



    this._CategoriesService.getCategoryMeals(this.categoryname).subscribe({
      next:data=>{
        this.categories=data.meals
        // console.log(this.categories);
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
