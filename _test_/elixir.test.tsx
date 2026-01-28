const { elixirBoostIngredients, elixirCalmIngredients, strengthBoostElixir, leastBoostElixir, lesserBoostElixir, normalBoostElixir, greaterBostElixir, differentBoostElixir, leastCalmElixir, lesserCalmElixir, normalCalmElixir, greaterCalmElixir, differentCalmElixir, venomIngredient} = require('../_mocks_/elixirMocks')
const { Cauldron } = require('../cauldron')

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Boost”', () => {
  describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
    test('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al múltiplo de 5 inmediatamente inferior.', () => {
      // Arrange 
      const ingredients = strengthBoostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.value).toBe(225)
    });
    test('El tipo será elixir', () => {
      // Arrange 
      const ingredients = strengthBoostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.type).toEqual('elixir')
    });
  })
  describe('Cuando todos los efectos son de tipo least', () => {
    test('El nombre de la poción será: Least + Attribute + elixir', () => {
      // Arrange
      const ingredients = leastBoostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Least')
      expect(potion.name).toContain('elixir')

    });
  })
  describe('Cuando todos los efectos son de tipo lesser', () => {
    test('El nombre de la poción será: Lesser + Attribute + elixir', () => {
      // Arrange
      const ingredients = lesserBoostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('elixir')

    });
  })
  describe('Cuando todos los efectos son de tipo normal', () => {
    test('El nombre de la poción será: Attribute + elixir', () => {
      // Arrange
      const ingredients = normalBoostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).not.toContain('Least')
      expect(potion.name).not.toContain('Lesser')
      expect(potion.name).not.toContain('Greater')
      expect(potion.name).toContain('elixir')

    });
  })
  describe('Cuando todos los efectos son de tipo greater', () => {
    test('El nombre de la poción será: Greater + Attribute + elixir', () => {
      // Arrange
      const ingredients = greaterBostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Greater')
      expect(potion.name).toContain('elixir')

    });
  })
  describe('Cuando todos los efectos son de tipo diferente', () => {
    test('El nombre de la poción será: Modifier + Attribute + elixir. El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
      // Arrange
      const ingredients = differentBoostElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('elixir')
    });
  })
  describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
    test('No podremos crear el elixir. El tipo de la poción creada no será “elixir”', () => {
      // Arrange 
      const ingredients = [elixirBoostIngredients[0], elixirBoostIngredients[1]]
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).not.toContain('elixir')

    })
  })

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Calm”', () => {
  describe('Cuando todos los efectos son de tipo least', () => {
    test('El nombre de la poción será: Least + Attribute + elixir', () => {
      // Arrange
      const ingredients = leastCalmElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Least')
      expect(potion.name).toContain('elixir')


    });
  })
  describe('Cuando todos los efectos son de tipo lesser', () => {
    test('El nombre de la poción será: Lesser + Attribute + elixir', () => {
      // Arrange
      const ingredients = lesserCalmElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Lesser')
      expect(potion.name).toContain('elixir')


    });
  })
  describe('Cuando todos los efectos son de tipo normal', () => {
    test('El nombre de la poción será: Attribute + elixir', () => {
       // Arrange
      const ingredients = normalCalmElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).not.toContain('Least')
      expect(potion.name).not.toContain('Lesser')
      expect(potion.name).not.toContain('Greater')
      expect(potion.name).toContain('elixir')

    });
  })
  describe('Cuando todos los efectos son de tipo greater', () => {
    test('El nombre de la poción será: Greater + Attribute + elixir', () => {
      // Arrange
      const ingredients = greaterCalmElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Greater')
      expect(potion.name).toContain('elixir')


    });
  })
  describe('Cuando todos los efectos son de tipo diferente', () => {
    test('El nombre de la poción será: Modifier + Attribute + elixir. El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
       // Arrange
      const ingredients = differentCalmElixir
      // Act
      const potion = Cauldron.createPotion(ingredients)
      // Assert
      expect(potion.name).toContain('Least')
      expect(potion.name).toContain('elixir')
    });
    });
  })
})

describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Calm” o “Boost”', () => {
  test('No podremos crear el elixir. El tipo de la poción creada no será “elixir"', () => {
           // Arrange
      const ingredient1 = elixirBoostIngredients[0]
      const ingredient2 = venomIngredient
      // Act
      const potion = Cauldron.createPotion([ingredient1, ingredient2])
      // Assert
      expect(potion.name).not.toContain('elixir')
    });
})



