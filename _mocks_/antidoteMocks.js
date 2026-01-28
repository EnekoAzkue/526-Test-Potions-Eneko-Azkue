const antidoteIngredients = [
  {
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
      "_id": "6702b44f76863c206a48cce1",
      "name": "Tranquility Flower",
      "description": "A tranquil flower that helps to alleviate insanity and calm the mind.",
      "value": 5,
      "effects": [
        "least_restore_insanity"
      ],
      "image": "/images/ingredients/restore/restore_12.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccd9",
      "name": "Fortitude Root",
      "description": "A potent root that strengthens the constitution and fortifies the body.",
      "value": 270,
      "effects": [
        "greater_restore_constitution"
      ],
      "image": "/images/ingredients/restore/restore_4.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccdc",
      "name": "Titan's Blood",
      "description": "A rare blood known for its ability to enhance strength tremendously.",
      "value": 75,
      "effects": [
        "restore_strength"
      ],
      "image": "/images/ingredients/restore/restore_7.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccea",
      "name": "Breeze Blossom",
      "description": "A light flower that gently restores dexterity and movement.",
      "value": 6,
      "effects": [
        "least_restore_dexterity"
      ],
      "image": "/images/ingredients/restore/restore_21.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce2",
      "name": "Mightroot",
      "description": "A root that enhances strength, giving the user a bit more power.",
      "value": 9,
      "effects": [
        "least_restore_strength"
      ],
      "image": "/images/ingredients/restore/restore_13.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccec",
      "name": "Enduring Root",
      "description": "A robust root that fortifies the constitution and endurance.",
      "value": 20,
      "effects": [
        "lesser_restore_constitution"
      ],
      "image": "/images/ingredients/restore/restore_23.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccee",
      "name": "Titan's Essence",
      "description": "An essence that boosts strength and physical power.",
      "value": 40,
      "effects": [
        "lesser_restore_strength"
      ],
      "image": "/images/ingredients/restore/restore_25.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccdf",
      "name": "Healing Ointment",
      "description": "A soothing ointment that effectively restores hit points.",
      "value": 65,
      "effects": [
        "restore_hit_points"
      ],
      "image": "/images/ingredients/restore/restore_10.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce0",
      "name": "Rejuvenating Sap",
      "description": "A sap that restores constitution and revitalizes the weary.",
      "value": 9,
      "effects": [
        "least_restore_constitution"
      ],
      "image": "/images/ingredients/restore/restore_11.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce4",
      "name": "Fleeting Breeze",
      "description": "A light herb that aids in restoring dexterity and grace.",
      "value": 140,
      "effects": [
        "greater_restore_dexterity"
      ],
      "image": "/images/ingredients/restore/restore_15.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccd6",
      "name": "Elixir of Vitality",
      "description": "A powerful potion ingredient that restores hit points significantly.",
      "value": 210,
      "effects": [
        "greater_restore_hit_points"
      ],
      "image": "/images/ingredients/restore/restore_1.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce5",
      "name": "Guardian's Essence",
      "description": "A mystical essence that restores hit points to its user.",
      "value": 30,
      "effects": [
        "lesser_restore_hit_points"
      ],
      "image": "/images/ingredients/restore/restore_16.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce3",
      "name": "Essence of Clarity",
      "description": "A potent extract that enhances mental clarity and boosts sanity.",
      "value": 240,
      "effects": [
        "greater_restore_insanity"
      ],
      "image": "/images/ingredients/restore/restore_14.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccef",
      "name": "Elysian Flower",
      "description": "A mythical flower that restores both sanity and intelligence.",
      "value": 235,
      "effects": [
        "greater_restore_intelligence"
      ],
      "image": "/images/ingredients/restore/restore_26.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce9",
      "name": "Clarity Root",
      "description": "A root that restores clarity and intelligence to the mind.",
      "value": 8,
      "effects": [
        "least_restore_intelligence"
      ],
      "image": "/images/ingredients/restore/restore_20.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccdd",
      "name": "Sage Essence",
      "description": "An essence derived from sage that revitalizes intelligence and creativity.",
      "value": 35,
      "effects": [
        "lesser_restore_intelligence"
      ],
      "image": "/images/ingredients/restore/restore_8.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccde",
      "name": "Nimble Leaf",
      "description": "A leaf that enhances dexterity and promotes agile movements.",
      "value": 28,
      "effects": [
        "lesser_restore_dexterity"
      ],
      "image": "/images/ingredients/restore/restore_9.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccda",
      "name": "Calming Herb",
      "description": "An herb that alleviates insanity and restores peace of mind.",
      "value": 20,
      "effects": [
        "lesser_restore_insanity"
      ],
      "image": "/images/ingredients/restore/restore_5.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce7",
      "name": "Silver Petal",
      "description": "A delicate petal that enhances charisma, making interactions smoother.",
      "value": 30,
      "effects": [
        "lesser_restore_charisma"
      ],
      "image": "/images/ingredients/restore/restore_18.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccf1",
      "name": "Vitalis Root",
      "description": "A root that enhances hit points and restores vitality to the weary.",
      "value": 7,
      "effects": [
        "least_restore_hit_points"
      ],
      "image": "/images/ingredients/restore/restore_28.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cce6",
      "name": "Courageous Bloom",
      "description": "A bloom that invigorates the constitution and instills bravery.",
      "value": 105,
      "effects": [
        "restore_constitution"
      ],
      "image": "/images/ingredients/restore/restore_17.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccd8",
      "name": "Swifthorn",
      "description": "A thorny plant that boosts dexterity and agility in its users.",
      "value": 55,
      "effects": [
        "restore_dexterity"
      ],
      "image": "/images/ingredients/restore/restore_3.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccdb",
      "name": "Charmflower",
      "description": "A beautiful flower that enhances charisma and charm in social situations.",
      "value": 160,
      "effects": [
        "greater_restore_charisma"
      ],
      "image": "/images/ingredients/restore/restore_6.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cced",
      "name": "Charming Vine",
      "description": "A vine that enhances charisma and captivates those around it.",
      "value": 8,
      "effects": [
        "least_restore_charisma"
      ],
      "image": "/images/ingredients/restore/restore_24.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccd7",
      "name": "Wisdom's Nectar",
      "description": "A golden liquid that enhances intelligence and sharpens the mind.",
      "value": 85,
      "effects": [
        "restore_intelligence"
      ],
      "image": "/images/ingredients/restore/restore_2.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48cceb",
      "name": "Elixir of Charisma",
      "description": "A shimmering potion that boosts the charm of those who drink it.",
      "value": 85,
      "effects": [
        "restore_charisma"
      ],
      "image": "/images/ingredients/restore/restore_22.webp",
      "type": "ingredient"
    },
    {
      "_id": "6702b44f76863c206a48ccf0",
      "name": "Calm Blossom",
      "description": "A delicate flower that soothes the mind and restores sanity.",
      "value": 6,
      "effects": [
        "restore_insanity"
      ],
      "image": "/images/ingredients/restore/restore_27.webp",
      "type": "ingredient"
    },
]

const poisonIngredient = 
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
    }


const strengthAntidote = [
    {
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
      "_id": "6702b44f76863c206a48ccdc",
      "name": "Titan's Blood",
      "description": "A rare blood known for its ability to enhance strength tremendously.",
      "value": 75,
      "effects": [
        "restore_strength"
      ],
      "image": "/images/ingredients/restore/restore_7.webp",
      "type": "ingredient"
    }
]

module.exports = { antidoteIngredients, strengthAntidote, poisonIngredient }