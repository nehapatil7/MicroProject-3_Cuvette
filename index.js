const foodData = require("./food.json");

var listAllFoodItems = foodData.map((items) => 
{
  return items;
});
console.log("List of All Food Items");
console.log(listAllFoodItems);

var Vegetable = foodData.filter((items) => {
  if (items.category === "Vegetable") return items.foodname;
});
console.log("List of All Vegetable Food Items");
console.log(Vegetable);

var Fruit = foodData.filter((items) => {
  if (items.category === "Fruit") return items.foodname;
});
console.log("List of All Fruit Food Items");
console.log(Fruit);

var Protien = foodData.filter((items) => {
  if (items.category === "Protein") return items;
});
console.log("List of All Protien Food Items");
console.log(Protien);

var Nuts = foodData.filter((items) => {
  if (items.category === "Nuts") return items;
});
console.log("List of All Nuts Food Items");
console.log(Nuts);

var Grains = foodData.filter((items) => {
  if (items.category === "Grain") return items;
});
console.log("List of All Grain Food Items");
console.log(Grains);

var Dairy = foodData.filter((items) => {
  if (items.category === "Dairy") return items;
});
console.log("List of All Dairy Food Items");
console.log(Dairy);

var FoodItemsCalorieAbove100 = foodData.filter((items) => {
  if (items.calorie > 100) return items;
});
console.log("List of All Food Items Which Are Above 100 Calorie");
console.log(FoodItemsCalorieAbove100);

var FoodItemsCalorieBelow100 = foodData.filter((items) => {
  if (items.calorie < 100) return items;
});
console.log("List of All Food Items Which Are Below 100 Calorie");
console.log(FoodItemsCalorieBelow100);

var highToLow = foodData.sort((a, b) => {
  return b.protiens - a.protiens;
});
console.log("List of All Food Items With Highest Protien Content To Lowest");
console.log(highToLow);

var lowToHigh = foodData.sort((a, b) => {
  return a.cab - b.cab;
});
console.log("List of All Food Items With Lowest Cab Content To Highest");
console.log(lowToHigh);