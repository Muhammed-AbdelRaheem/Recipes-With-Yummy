import { AreaService } from 'src/app/Service/area.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-meals',
  templateUrl: './area-meals.component.html',
  styleUrls: ['./area-meals.component.css']
})
export class AreaMealsComponent implements OnInit {
  constructor(private _AreaService: AreaService, private _ActivatedRoute: ActivatedRoute) { }

  areaName: any = ""
  areaMeals:any[] = [];

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({

      next: params => {this.areaName= params.get('name') }

    })

    this._AreaService.getAreaMeals(this.areaName).subscribe({
      next: data => {
        this.areaMeals = data.meals;
        // console.log(  this.areaMeals);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
