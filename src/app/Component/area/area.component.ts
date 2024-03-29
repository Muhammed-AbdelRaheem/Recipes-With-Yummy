import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/Service/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  constructor(private _AreaService:AreaService){}

  areas:any[]=[]
ngOnInit(): void {
  this._AreaService.getAreas().subscribe({
    next:data=>{
      this.areas = data.meals;
      // console.log(this.areas);
      
    },
    error:err=>{
      console.log(err);
    }
  })
}
}
