const { poisonIngredients, strengthPoison, antidoteIngredient } = require('../_mocks_/poisonMocks')
const { Cauldron }  = require ('../cauldron')


describe('Cuando todos los ingredientes llevan el efecto de tipo "Damage”.', () => {
  describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
    test('El nombre deberá ser el correspondiente. Poison of + “', () => {
      // Arrange 
      const ingredients = strengthPoison
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Poison of')
    });
    test('El value será negativo e igual a la suma de los valores según la tabla de modificadores.', () => {
      // Arrange
      const ingredients = strengthPoison
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBeLessThan(0)
      expect(potion.value).toBe(-7)
    });
    test('El tipo será “poison”', () => {
      // Arrange
      const ingredients = strengthPoison
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.type).toBe('poison')
    });
  })
  describe('Cuando todos los ingredientes no tienen el mismo atributo (INT, DEX…)', () => {
    test('No podremos crear el elixir. El tipo no puede ser “poison”', () => {
      // Arrange
      const ingredient1 = poisonIngredients[1]
      const ingredient2 = poisonIngredients[2]
      // Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      // Assert
      expect(potion.type).not.toBe('antidote')

    });
  })
  })
  describe('Si alguno de los ingredientes no tiene el nombre “Damage”.', () => {
    test('No podremos crear un antídoto. El tipo no puede ser “poison”', () => {
      // Arrange
      const ingredient1 = poisonIngredients[1]
      const ingredient2 = antidoteIngredient
      // Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      // Assert
      expect(potion.type).not.toBe('antidote')

    });
})


