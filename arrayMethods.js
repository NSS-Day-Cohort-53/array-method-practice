const fruitsAndVeggies = [
  {
    name: "banana",
    color: "yellow",
    type: "fruit"
  },
  {
    name: "strawberry",
    color: "red",
    type: "fruit"
  },
  {
    name: "cucumber",
    color: "green",
    type: "vegetable"
  },
  {
    name: "broccoli",
    color: "green",
    type: "vegetable"
  },
  {
    name: "carrot",
    color: "orange",
    type: "vegetable"
  }
]

// only returns the first item in the array that evaluates to true
const redFood = fruitsAndVeggies.find((index) => index.color === "red")
console.log(redFood)

//filter returns all items in the array that evaluate to true
const greenFoods = fruitsAndVeggies.filter((food) => food.color === "green")
const foodNames = greenFoods.map((food) => {
 return food.name
})
console.log(foodNames)

//map returns a new array with each item in the array modified as instructed 
const htmlFoods = fruitsAndVeggies.map(food => {
  return `<p>This is one of my favorite foods: ${food.name}</p>`
})

//joining array of strings into one giant string
const joinedString = htmlFoods.join("")
console.log(htmlFoods, joinedString)

//filtering numbers instead of objects
const numbers = [1, 2, 3, 4, 5]

const numbersabove3 = numbers.filter((number) => number > 4)
console.log(numbersabove3)