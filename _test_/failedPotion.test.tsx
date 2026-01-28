const { failedIngredients } = require('../_mocks_/failedMock')
const { Cauldron } = require('../cauldron')

describe('Si no se cumple cualquiera de las condiciones de creación anteriores ', () => {
  test('Crearemos el Tonic of Downfall.', () => {
      // Arrange
      const ingredients = failedIngredients
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toEqual('Tonic of Downfall')
  })
})