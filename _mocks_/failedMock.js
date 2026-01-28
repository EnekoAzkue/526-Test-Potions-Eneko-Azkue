const failedIngredients = [{
  "_id": "6702b44f76863c206a48cce8",
  "name": "Giant's Tear",
  "description": "A tear known for its ability to enhance strength and fortitude.",
  "value": 250,
  "effects": [
    "greater_restore_strength"
  ],
  "image": "/images/ingredients/restore/restore_19.webp",
  "type": "ingredient"
},
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
]


module.exports = { failedIngredients }