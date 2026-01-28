const essenceIngredients = [{
  "_id": "6702b39d76863c206a48cccb",
  "name": "Crimson Lotus",
  "description": "A sacred flower that boosts one's health noticeably.",
  "value": 110,
  "effects": [
    "increase_hit_points"
  ],
  "image": "/images/ingredients/increase/increase_2.webp",
  "type": "ingredient"
},
{
  "_id": "6702b39d76863c206a48cccc",
  "name": "Ironbark Berry",
  "description": "A hard berry that enhances hit points by a small amount.",
  "value": 25,
  "effects": [
    "lesser_increase_hit_points"
  ],
  "image": "/images/ingredients/increase/increase_3.webp",
  "type": "ingredient"
},
{
  "_id": "6702b39d76863c206a48cccd",
  "name": "Moonleaf",
  "description": "A mystical leaf that offers a slight increase in hit points.",
  "value": 8,
  "effects": [
    "least_increase_hit_points"
  ],
  "image": "/images/ingredients/increase/increase_4.webp",
  "type": "ingredient"
},
{
  "_id": "6702b39d76863c206a48ccca",
  "name": "Heartroot",
  "description": "A rare root known to strengthen the body's vitality permanently.",
  "value": 275,
  "effects": [
    "greater_increase_hit_points"
  ],
  "image": "/images/ingredients/increase/increase_1.webp",
  "type": "ingredient"
}]

const twoLesser = [

  {
    "_id": "6702b39d76863c206a48cccc",
    "name": "Ironbark Berry",
    "description": "A hard berry that enhances hit points by a small amount.",
    "value": 25,
    "effects": [
      "lesser_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_3.webp",
    "type": "ingredient"
  },
  {
    "_id": "6702b39d76863c206a48cccc",
    "name": "Ironbark Berry",
    "description": "A hard berry that enhances hit points by a small amount.",
    "value": 25,
    "effects": [
      "lesser_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_3.webp",
    "type": "ingredient"
  },
]

const threeLeast = [
  {
    "_id": "6702b39d76863c206a48cccd",
    "name": "Moonleaf",
    "description": "A mystical leaf that offers a slight increase in hit points.",
    "value": 8,
    "effects": [
      "least_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_4.webp",
    "type": "ingredient"
  },
  {
    "_id": "6702b39d76863c206a48cccd",
    "name": "Moonleaf",
    "description": "A mystical leaf that offers a slight increase in hit points.",
    "value": 8,
    "effects": [
      "least_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_4.webp",
    "type": "ingredient"
  },
  {
    "_id": "6702b39d76863c206a48cccd",
    "name": "Moonleaf",
    "description": "A mystical leaf that offers a slight increase in hit points.",
    "value": 8,
    "effects": [
      "least_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_4.webp",
    "type": "ingredient"
  },]
const fourGreater = [
  {
    "_id": "6702b39d76863c206a48ccca",
    "name": "Heartroot",
    "description": "A rare root known to strengthen the body's vitality permanently.",
    "value": 275,
    "effects": [
      "greater_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_1.webp",
    "type": "ingredient"
  },
  {
    "_id": "6702b39d76863c206a48ccca",
    "name": "Heartroot",
    "description": "A rare root known to strengthen the body's vitality permanently.",
    "value": 275,
    "effects": [
      "greater_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_1.webp",
    "type": "ingredient"
  },
  {
    "_id": "6702b39d76863c206a48ccca",
    "name": "Heartroot",
    "description": "A rare root known to strengthen the body's vitality permanently.",
    "value": 275,
    "effects": [
      "greater_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_1.webp",
    "type": "ingredient"
  },
  {
    "_id": "6702b39d76863c206a48ccca",
    "name": "Heartroot",
    "description": "A rare root known to strengthen the body's vitality permanently.",
    "value": 275,
    "effects": [
      "greater_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_1.webp",
    "type": "ingredient"
  }]

const differentIngredientEssence = [

  {
    "_id": "6702b39d76863c206a48ccca",
    "name": "Heartroot",
    "description": "A rare root known to strengthen the body's vitality permanently.",
    "value": 275,
    "effects": [
      "greater_increase_hit_points"
    ],
    "image": "/images/ingredients/increase/increase_1.webp",
    "type": "ingredient"
  },
  {
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
]

const stenchIngredient = 
  {
    "_id": "6702b3b776863c206a48ccd2",
    "name": "Ashen Petal",
    "description": "A petal from a forbidden flower that barely reduces hit points.",
    "value": 6,
    "effects": [
      "least_decrease_hit_points"
    ],
    "image": "/images/ingredients/decrease/decrease_4.webp",
    "type": "ingredient"
  }


module.exports = { essenceIngredients, twoLesser, threeLeast, fourGreater, differentIngredientEssence, stenchIngredient }