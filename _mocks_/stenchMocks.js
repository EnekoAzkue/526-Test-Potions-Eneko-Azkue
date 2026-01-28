const stenchIngredients = [{
  "_id": "6702b3b776863c206a48ccd2",
  "name": "Ashen Petal",
  "description": "A petal from a forbidden flower that barely reduces hit points.",
  "value": 6,
  "effects": [
    "least_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_4.webp",
  "type": "ingredient"
},
{
  "_id": "6702b3b776863c206a48cccf",
  "name": "Witherleaf",
  "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
  "value": 260,
  "effects": [
    "greater_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_1.webp",
  "type": "ingredient"
},
{
  "_id": "6702b3b776863c206a48ccd0",
  "name": "Venomroot",
  "description": "A dark root that slowly diminishes the user's hit points over time.",
  "value": 105,
  "effects": [
    "decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_2.webp",
  "type": "ingredient"
},
{
  "_id": "6702b3b776863c206a48ccd1",
  "name": "Bloodthorn Berry",
  "description": "A poisonous berry that slightly decreases one's overall health.",
  "value": 35,
  "effects": [
    "lesser_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_3.webp",
  "type": "ingredient"
}
]

const twoLesser = [
{
  "_id": "6702b3b776863c206a48ccd1",
  "name": "Bloodthorn Berry",
  "description": "A poisonous berry that slightly decreases one's overall health.",
  "value": 35,
  "effects": [
    "lesser_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_3.webp",
  "type": "ingredient"
},
{
  "_id": "6702b3b776863c206a48ccd1",
  "name": "Bloodthorn Berry",
  "description": "A poisonous berry that slightly decreases one's overall health.",
  "value": 35,
  "effects": [
    "lesser_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_3.webp",
  "type": "ingredient"
}]

const threeLeast = [{
  "_id": "6702b3b776863c206a48ccd2",
  "name": "Ashen Petal",
  "description": "A petal from a forbidden flower that barely reduces hit points.",
  "value": 6,
  "effects": [
    "least_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_4.webp",
  "type": "ingredient"
}, {
  "_id": "6702b3b776863c206a48ccd2",
  "name": "Ashen Petal",
  "description": "A petal from a forbidden flower that barely reduces hit points.",
  "value": 6,
  "effects": [
    "least_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_4.webp",
  "type": "ingredient"
}, {
  "_id": "6702b3b776863c206a48ccd2",
  "name": "Ashen Petal",
  "description": "A petal from a forbidden flower that barely reduces hit points.",
  "value": 6,
  "effects": [
    "least_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_4.webp",
  "type": "ingredient"
}]
const fourGreater = [{
  "_id": "6702b3b776863c206a48cccf",
  "name": "Witherleaf",
  "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
  "value": 260,
  "effects": [
    "greater_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_1.webp",
  "type": "ingredient"
}, {
  "_id": "6702b3b776863c206a48cccf",
  "name": "Witherleaf",
  "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
  "value": 260,
  "effects": [
    "greater_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_1.webp",
  "type": "ingredient"
}, {
  "_id": "6702b3b776863c206a48cccf",
  "name": "Witherleaf",
  "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
  "value": 260,
  "effects": [
    "greater_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_1.webp",
  "type": "ingredient"
}, {
  "_id": "6702b3b776863c206a48cccf",
  "name": "Witherleaf",
  "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
  "value": 260,
  "effects": [
    "greater_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_1.webp",
  "type": "ingredient"
},]

const differentIngredientStench = [{
  "_id": "6702b3b776863c206a48cccf",
  "name": "Witherleaf",
  "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
  "value": 260,
  "effects": [
    "greater_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_1.webp",
  "type": "ingredient"
},{
  "_id": "6702b3b776863c206a48ccd2",
  "name": "Ashen Petal",
  "description": "A petal from a forbidden flower that barely reduces hit points.",
  "value": 6,
  "effects": [
    "least_decrease_hit_points"
  ],
  "image": "/images/ingredients/decrease/decrease_4.webp",
  "type": "ingredient"
}]

const essenceIngredient =   {
    "_id": "6702b39d76863c206a48cccd",
    "name": "Moonleaf",
    "description": "A mystical leaf that offers a slight increase in hit points.",
    "value": 8,
    "effects": [
      "least_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_4.webp",
    "type": "ingredient"
  }


  module.exports = { stenchIngredients, twoLesser, threeLeast, fourGreater, differentIngredientStench, essenceIngredient }