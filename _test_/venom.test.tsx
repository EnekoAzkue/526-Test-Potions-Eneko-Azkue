const { venomSetbackIngredients, venomFrenzyIngredients, strengthSetbackVenom, leastSetbackVenom, lesserSetbackVenom, normalSetbackVenom, greaterBostVenom, differentSetbackVenom, leastFrenzyVenom, lesserFrenzyVenom, normalFrenzyVenom, greaterFrenzyVenom, differentFrenzyVenom, elixirIngredient} = require('../_mocks_/venomMocks')
const { Cauldron } = require('../cauldron')

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Setback”', () => {
  describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
    test('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al múltiplo de 5 inmediatamente inferior.', () => {
      // Arrange 
      const ingredients = strengthSetbackVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe(-160)
    });
    test('El tipo será venom', () => {
      // Arrange 
      const ingredients = strengthSetbackVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.type).toEqual('venom')
    });
  })
  describe('Cuando todos los efectos son de tipo least', () => {
    test('El nombre de la poción será: Least + Attribute + venom', () => {
      // Arrange
      const ingredients = leastSetbackVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Least')
      expect(potion.name).toContain('venom')

    });
  })
  describe('Cuando todos los efectos son de tipo lesser', () => {
    test('El nombre de la poción será: Lesser + Attribute + venom', () => {
      // Arrange
      const ingredients = lesserSetbackVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('venom')

    });
  })
  describe('Cuando todos los efectos son de tipo normal', () => {
    test('El nombre de la poción será: Attribute + venom', () => {
      // Arrange
      const ingredients = normalSetbackVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).not.toContain('Least')
      expect(potion.name).not.toContain('Lesser')
      expect(potion.name).not.toContain('Greater')
      expect(potion.name).toContain('venom')

    });
  })
  describe('Cuando todos los efectos son de tipo greater', () => {
    test('El nombre de la poción será: Greater + Attribute + venom', () => {
      // Arrange
      const ingredients = greaterBostVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Greater')
      expect(potion.name).toContain('venom')

    });
  })
  describe('Cuando todos los efectos son de tipo diferente', () => {
    test('El nombre de la poción será: Modifier + Attribute + venom. El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
      // Arrange
      const ingredients = differentSetbackVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('venom')
    });
  })
  describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
    test('No podremos crear el venom. El tipo de la poción creada no será “venom”', () => {
      // Arrange 
      const ingredients = [venomSetbackIngredients[0], venomSetbackIngredients[1]]
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).not.toContain('venom')

    })
  })
})
///////////////////

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Frenzy”', () => {
  describe('Cuando todos los efectos son de tipo least', () => {
    test('El nombre de la poción será: Least + Attribute + venom', () => {
      // Arrange
      const ingredients = leastFrenzyVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Least')
      expect(potion.name).toContain('venom')


    });
  })
  describe('Cuando todos los efectos son de tipo lesser', () => {
    test('El nombre de la poción será: Lesser + Attribute + venom', () => {
      // Arrange
      const ingredients = lesserFrenzyVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('venom')


    });
  })
  describe('Cuando todos los efectos son de tipo normal', () => {
    test('El nombre de la poción será: Attribute + venom', () => {
       // Arrange
      const ingredients = normalFrenzyVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).not.toContain('Least')
      expect(potion.name).not.toContain('Lesser')
      expect(potion.name).not.toContain('Greater')
      expect(potion.name).toContain('venom')

    });
  })
  describe('Cuando todos los efectos son de tipo greater', () => {
    test('El nombre de la poción será: Greater + Attribute + venom', () => {
      // Arrange
      const ingredients = greaterFrenzyVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Greater')
      expect(potion.name).toContain('venom')


    });
  })
  describe('Cuando todos los efectos son de tipo diferente', () => {
    test('El nombre de la poción será: Modifier + Attribute + venom. El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
       // Arrange
      const ingredients = differentFrenzyVenom
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('venom')
    });
    });
  })



// describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Frenzy” o “Setback”', () => {
//   test('No podremos crear el venom. El tipo de la poción creada no será “venom"', () => {
//            // Arrange
//       const ingredient1 = venomSetbackIngredients[0]
//       const ingredient2 = elixirIngredient
//       // Act
//       const potion = Cauldron.createPotion([ingredient1, ingredient2])
//       // Assert
//       expect(potion.name).not.toContain('venom')
//     });
// })



