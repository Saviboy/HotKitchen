import express from"express";
import cors from "cors";
import { sample_foods } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
app.get("/api/foods",(req, res)=> {
    res.send(sample_foods);
})

app.get("/api/foods/:foodId",(req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})

const port = 5000;
app.listen(port,() =>{
     console.log("Website served on http://localhost:" + port);
})