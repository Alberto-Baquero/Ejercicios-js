const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (let i = 0; i < foodSchedule.length; i++) {
    const vegan = foodSchedule[i];
    if (!vegan.isVegan) {
        vegan.name= fruits [i]
        vegan.isVegan=true
    }
}
console.log(foodSchedule);