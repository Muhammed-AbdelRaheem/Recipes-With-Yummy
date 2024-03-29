import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Service/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  constructor(private _CategoriesServic:CategoriesService){}

  categories:any[] = [];
ngOnInit(): void {
  
  this._CategoriesServic.getCategories().subscribe({
    next:data=>{
      this.categories = data.categories;
      // console.log(this.categories);
    },
    error:err=>{
      console.log(err);
    }
  })

}
}
