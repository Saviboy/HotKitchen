import { Router } from "express";
import { sample_foods } from "../data";
import asyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";


const router = Router();


router.get("/seed", asyncHandler(
    async (req,res) => {
        const foodsCount = await FoodModel.countDocuments();
        if(foodsCount> 0){
            res.send("Seed is already done!");
            return;
        }
            await FoodModel.create(sample_foods);
            res.send("Seed Is Done!");
        
    }
) )



router.get("/",(req, res)=> {
    res.send(sample_foods);
})

router.get("/:foodId",(req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})

export default router;