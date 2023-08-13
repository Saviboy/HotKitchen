import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = [];
  constructor(private foodService:FoodService){
    let foodsObservable: Observable<Food[]>;
    foodsObservable = foodService.getAll();

    foodsObservable.subscribe((serverFoods)=> {
      this.foods = serverFoods;
    })
  }

}
