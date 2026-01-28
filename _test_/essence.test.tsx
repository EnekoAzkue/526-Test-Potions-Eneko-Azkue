const { essenceIngredients, twoLesser, threeLeast, fourGreater, differentIngredientEssence, stenchIngredient } = require('../_mocks_/essenceMocks')
const { Cauldron } = require('../cauldron')

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Increase”', () => {
  describe('Cuando todos los ingredientes tienen el mismo atributo HP', () => {
    test('El tipo será essence', () => {
      // Arrange
      const ingredients = [essenceIngredients[0],  essenceIngredients[1]]
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.type).toEqual('essence')
    })
  })
  describe('Cuando todos los efectos son del mismo tipo (lesser, greater, …)', () => {
    describe('Cuando el número de ingredientes es 2', () => {
      test('El valor resultante del atributo será la suma de values de los ingredientes más un 20%', () => {
      // Arrange
      const ingredients = twoLesser
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe((25 + 25) * 1.2)
      })
    })
  })
  describe('Cuando el número de ingredientes es 3', () => {
    test('El valor resultante del atributo será la suma de values de los ingredientes más un 40%', () => {
      // Arrange
      const ingredients = threeLeast
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe(Math.round((8 + 8 + 8) * 1.4))
      })
    })
  })
  describe('Cuando el número de ingredientes es 4', () => {
    test('El valor resultante del atributo será la suma de values de los ingredientes más un 80%', () => {
      // Arrange
      const ingredients = fourGreater
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe((275 + 275 + 275 + 275) * 1.8)
      })
    })
    test('El nombre de la poción resultante deberá ser: Essence of + modifier + heal. Ej: Essence of lesser heal, Siendo el modificador a aplicar el nombre de la potencia de los ingredientes.', () => {
      // Arrange
      const ingredients = fourGreater
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Essence')
      expect(potion.name).toContain('greater')
      })
  describe('Cuando todos los efectos son de diferente tipo (lesser, greater, …)', () => {
    test('El valor resultante del atributo será la suma de values de los ingredientes', () => {
      // Arrange
      const ingredients = differentIngredientEssence
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe(283)
      })
    })
    test('El nombre de la poción resultante deberá ser: Essence of + modifier + heal. Ej: Essence of lesser heal, El modificador del nombre será el que corresponda con el modificador más pequeño', () => {
      // Arrange
      const ingredients = differentIngredientEssence
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Essence')
      expect(potion.name).toContain('least')
      })

  describe('Cuando no todos los ingredientes tienen el mismo atributo (HP)', () => {
    test('No podremos crear el elixir. El tipo de la poción creada no será “essence”.', () => {
      //Arrange
      const ingredient1 = essenceIngredients[0];
      const ingredient2 = stenchIngredient;
      //Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      //Assert
      expect(potion.type).not.toBe('essence')
    })
  })
  describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Increase”.', () => {
    test('No podremos crear el elixir. El tipo de la poción creada no será “essence”.', () => {
      //Arrange
      const ingredient1 = essenceIngredients[0];
      const ingredient2 = stenchIngredient;
      //Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      //Assert
      expect(potion.type).not.toBe('essence')
    })
  })


