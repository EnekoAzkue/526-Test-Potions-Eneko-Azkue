const poisonIngredients = [
{
      "_id": "6702b46b76863c206a48ccfb",
      "name": "Sickly Sap",
      "description": "A viscous sap that slows movement and reduces dexterity.",
      "value": 175,
      "effects": [
        "greater_damage_dexterity"
      ],
      "image": "/images/ingredients/damage/damage_9.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd0e",
      "name": "Defenseless Herb",
      "description": "A herb that leaves the user vulnerable by reducing constitution.",
      "value": 12,
      "effects": [
        "least_damage_constitution"
      ],
      "image": "/images/ingredients/damage/damage_28.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf5",
      "name": "Tainted Thorn",
      "description": "A thorn that inflicts pain and weakens dexterity.",
      "value": 5,
      "effects": [
        "least_damage_dexterity"
      ],
      "image": "/images/ingredients/damage/damage_3.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd0b",
      "name": "Charmbreaker Herb",
      "description": "An herb that disrupts charm, making the user less appealing.",
      "value": 10,
      "effects": [
        "least_damage_charisma"
      ],
      "image": "/images/ingredients/damage/damage_25.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf6",
      "name": "Doomroot",
      "description": "A deadly root that drains the constitution of those who consume it.",
      "value": 270,
      "effects": [
        "greater_damage_constitution"
      ],
      "image": "/images/ingredients/damage/damage_4.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf9",
      "name": "Brute's Bane",
      "description": "A potent toxin that saps strength from even the mightiest foes.",
      "value": 80,
      "effects": [
        "damage_strength"
      ],
      "image": "/images/ingredients/damage/damage_7.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf3",
      "name": "Wraith's Essence",
      "description": "An essence that corrupts hit points and drains life force.",
      "value": 220,
      "effects": [
        "greater_damage_hit_points"
      ],
      "image": "/images/ingredients/damage/damage_1.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf8",
      "name": "Foul Nectar",
      "description": "A sickly nectar that erodes charisma and social grace.",
      "value": 55,
      "effects": [
        "damage_charisma"
      ],
      "image": "/images/ingredients/damage/damage_6.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccfc",
      "name": "Crimson Toxin",
      "description": "A potent poison derived from rare red flowers that can weaken even the strongest warriors.",
      "value": 30,
      "effects": [
        "lesser_damage_strength"
      ],
      "image": "/images/ingredients/damage/damage_10.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccfe",
      "name": "Elixir of Despair",
      "description": "An elixir that heightens feelings of insanity, shattering sanity.",
      "value": 40,
      "effects": [
        "lesser_damage_insanity"
      ],
      "image": "/images/ingredients/damage/damage_12.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd01",
      "name": "Wraith's Thorn",
      "description": "A sinister plant with barbed thorns that can sap the strength of its victims upon contact.",
      "value": 5,
      "effects": [
        "least_damage_strength"
      ],
      "image": "/images/ingredients/damage/damage_15.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf7",
      "name": "Madness Vine",
      "description": "A vine that induces insanity, twisting the mind of its victims.",
      "value": 10,
      "effects": [
        "least_damage_insanity"
      ],
      "image": "/images/ingredients/damage/damage_5.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd03",
      "name": "Constitution Siphon",
      "description": "An ingredient that drains constitution, leaving the user feeble.",
      "value": 35,
      "effects": [
        "lesser_constitution"
      ],
      "image": "/images/ingredients/damage/damage_17.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd0c",
      "name": "The Sorrowful Bloom",
      "description": "A flower that enhances insanity and breaks the spirit.",
      "value": 65,
      "effects": [
        "damage_insanity"
      ],
      "image": "/images/ingredients/damage/damage_26.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd08",
      "name": "Twisted Vine",
      "description": "A vine that weakens dexterity and disrupts graceful movements.",
      "value": 55,
      "effects": [
        "damage_dexterity"
      ],
      "image": "/images/ingredients/damage/damage_22.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd06",
      "name": "Enfeebling Essence",
      "description": "A dark essence that weakens strength, rendering users helpless.",
      "value": 230,
      "effects": [
        "greater_damage_strength"
      ],
      "image": "/images/ingredients/damage/damage_20.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccfa",
      "name": "Distraction Herb",
      "description": "A herb that confuses the mind, causing intelligence to falter.",
      "value": 35,
      "effects": [
        "lesser_damage_intelligence"
      ],
      "image": "/images/ingredients/damage/damage_8.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd00",
      "name": "Shadowbane Essence",
      "description": "An extract from dark fruits that lowers vitality and leaves a bitter aftertaste.",
      "value": 90,
      "effects": [
        "lesser_damage_hit_points"
      ],
      "image": "/images/ingredients/damage/damage_14.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccfd",
      "name": "Crippling Bloom",
      "description": "A flower that weakens constitution and breaks the will of its user.",
      "value": 60,
      "effects": [
        "damage_constitution"
      ],
      "image": "/images/ingredients/damage/damage_11.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd05",
      "name": "Gloom Petal",
      "description": "A petal that shrouds charisma in shadows, making one unlikable.",
      "value": 160,
      "effects": [
        "greater_damage_charisma"
      ],
      "image": "/images/ingredients/damage/damage_19.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd09",
      "name": "Vitality Drain",
      "description": "An extract that drains hit points steadily from its target.",
      "value": 85,
      "effects": [
        "damage_hit_points"
      ],
      "image": "/images/ingredients/damage/damage_23.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccff",
      "name": "Charm's Demise",
      "description": "An ingredient that diminishes charisma, making one less appealing.",
      "value": 40,
      "effects": [
        "lesser_damage_charisma"
      ],
      "image": "/images/ingredients/damage/damage_13.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd04",
      "name": "Anxiety Herb",
      "description": "A herb that increases feelings of insanity and paranoia.",
      "value": 225,
      "effects": [
        "greater_damage_insanity"
      ],
      "image": "/images/ingredients/damage/damage_18.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48ccf4",
      "name": "Cursed Blossom",
      "description": "A flower that sows doubt, reducing intelligence in its victims.",
      "value": 50,
      "effects": [
        "damage_intelligence"
      ],
      "image": "/images/ingredients/damage/damage_2.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd02",
      "name": "Slowpoke Leaf",
      "description": "A leaf that impedes movement and reduces dexterity.",
      "value": 38,
      "effects": [
        "lesser_damage_dexterity"
      ],
      "image": "/images/ingredients/damage/damage_16.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd07",
      "name": "Brain Rot",
      "description": "A toxin that slowly erodes intelligence, leaving a dull mind.",
      "value": 12,
      "effects": [
        "least_damage_intelligence"
      ],
      "image": "/images/ingredients/damage/damage_21.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd0a",
      "name": "Vile Nightshade",
      "description": "A dark herb known for its ability to sap the life force of those who consume it.",
      "value": 8,
      "effects": [
        "least_damage_hit_points"
      ],
      "image": "/images/ingredients/damage/damage_24.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b46b76863c206a48cd0d",
      "name": "Wretched Extract",
      "description": "An extract that plagues the mind, causing loss of intelligence.",
      "value": 275,
      "effects": [
        "greater_damage_intelligence"
      ],
      "image": "/images/ingredients/damage/damage_27.webp",
      "type": "ingredient"
    }
]

const strengthIngredients = [
    {
      "_id": "6702b46b76863c206a48ccf9",
      "name": "Brute's Bane",
      "description": "A potent toxin that saps strength from even the mightiest foes.",
      "value": 80,
      "effects": [
        "damage_strength"
      ],
      "image": "/images/ingredients/damage/damage_7.webp",
      "type": "ingredient"
    },
        {
      "_id": "6702b46b76863c206a48cd06",
      "name": "Enfeebling Essence",
      "description": "A dark essence that weakens strength, rendering users helpless.",
      "value": 230,
      "effects": [
        "greater_damage_strength"
      ],
      "image": "/images/ingredients/damage/damage_20.webp",
      "type": "ingredient"
    }
]

module.exports = { poisonIngredients, strengthIngredients }