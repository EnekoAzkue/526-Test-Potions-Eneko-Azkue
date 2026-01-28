const { antidoteIngredients, strengthAntidote, poisonIngredient } = require("../_mocks_/antidoteMocks")
const { Cauldron } = require("../cauldron")


describe('Cuando todos los ingredientes llevan el efecto de tipo “Restore”.', () => {
  describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
    test('El nombre deberá ser el correspondiente. Antidote of + “', () => {
      // Arrange 
      const ingredients = strengthAntidote
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Antidote of')
    });
    test('El value será positivo e igual a la suma de los valores según la tabla de modificadores.', () => {
      // Arrange
      const ingredients = strengthAntidote
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBeGreaterThan(0)
      expect(potion.value).toBe(7)
    });
    test('El tipo será “antidote”', () => {
      // Arrange
      const ingredients = strengthAntidote
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.type).toBe('antidote')
    });
  })
  describe('Cuando todos los ingredientes no tienen el mismo atributo (INT, DEX…)', () => {
    test('No podremos crear el elixir. El tipo no puede ser “antidote”', () => {
      // Arrange
      const ingredient1 = antidoteIngredients[1]
      const ingredient2 = antidoteIngredients[2]
      // Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      // Assert
      expect(potion.type).not.toBe('antidote')

    });
  })
  describe('Si alguno de los ingredientes no tiene el nombre “Restore”.', () => {
    test('No podremos crear un antídoto. El tipo no puede ser “antidote”', () => {
      // Arrange
      const ingredient1 = antidoteIngredients[1]
      const ingredient2 = poisonIngredient
      // Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      // Assert
      expect(potion.type).not.toBe('antidote')

    });
  })
})

