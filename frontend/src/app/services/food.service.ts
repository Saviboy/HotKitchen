import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable <Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
