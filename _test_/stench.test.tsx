const { stenchIngredients, twoLesser, threeLeast, fourGreater, differentIngredientStench, essenceIngredient } = require('../_mocks_/stenchMocks')
const { Cauldron } = require('../cauldron')

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Decrease”', () => {
  describe('Cuando todos los ingredientes tienen el mismo atributo HP', () => {
    test('El tipo será stench', () => {
      // Arrange
      const ingredients = [stenchIngredients[0],  stenchIngredients[1]]
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.type).toEqual('stench')
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
      console.log(potion)
      expect(potion.value).toBe(-(35 + 35) * 1.2)
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
      expect(potion.value).toBe(Math.floor(-(6 + 6 + 6) * 1.4))
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
      expect(potion.value).toBe(-(260 + 260 + 260 + 260 ) * 1.8)
      })
    })
    test('El nombre de la poción resultante deberá ser: Stench of + modifier + heal. Ej: Stench of lesser heal, Siendo el modificador a aplicar el nombre de la potencia de los ingredientes.', () => {
      // Arrange
      const ingredients = fourGreater
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Stench')
      expect(potion.name).toContain('greater')
      })
  describe('Cuando todos los efectos son de diferente tipo (lesser, greater, …)', () => {
    test('El valor resultante del atributo será la suma de values de los ingredientes', () => {
      // Arrange
      const ingredients = differentIngredientStench
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe(-266)
      })
    })
    test('El nombre de la poción resultante deberá ser: Stench of + modifier + heal. Ej: Stench of lesser heal, El modificador del nombre será el que corresponda con el modificador más pequeño', () => {
      // Arrange
      const ingredients = differentIngredientStench
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Stench')
      expect(potion.name).toContain('least')
      })

  describe('Cuando no todos los ingredientes tienen el mismo atributo (HP)', () => {
    test('No podremos crear el elixir. El tipo de la poción creada no será “stench”.', () => {
      //Arrange
      const ingredient1 = stenchIngredients[0];
      const ingredient2 = essenceIngredient;
      //Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      //Assert
      expect(potion.type).not.toBe('stench')
    })
  })
  describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Decrease”.', () => {
    test('No podremos crear el elixir. El tipo de la poción creada no será “stench”.', () => {
      //Arrange
      const ingredient1 = stenchIngredients[0];
      const ingredient2 = essenceIngredient;
      //Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      //Assert
      expect(potion.type).not.toBe('stench')
    })
  })

