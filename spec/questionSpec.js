describe('Testing Calculation', () => {
  let aCalculator
  // Test #1
  describe('Test #1 After put two files and submitted, see whether it comes up with right values', () => {
    aCalculator = new Calculator()
    let inputArray = [[160,591,114,229,230,270,128,1657,624,1503],[186,699,132,272,291,331,199,1890,788,1601]]
    aCalculator.calculateRequirements(inputArray)
    
    it('should contain a sumX property with value "5506" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        sumX: 5506
      }))
    })

    it('should contain a sumY property with value "6389" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        sumY: 6389
      }))
    })

    it('should contain a sumXSquare property with value "5976536" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        sumXSquare: 5976536
      }))
    })

    it('should contain a sumYSquare property with value "7604693" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        sumYSquare: 7604693
      }))
    })

    it('should contain a sumXY property with value "6731722" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        sumXY: 6731722
      }))
    })

    it('should contain a meanX property with value "550.6" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        meanX: 550.6
      }))
    })

    it('should contain a meanY property with value "638.9" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        meanY: 638.9
      }))
    })
  })

  // Test #2
  describe('Test #2 After calculate Correlation, see whether we get the right answer', () => {
    aCalculator = new Calculator()
    let inputArray = [[160,591,114,229,230,270,128,1657,624,1503],[186,699,132,272,291,331,199,1890,788,1601]]
    aCalculator.calculateRequirements(inputArray)
    aCalculator.calcCorrelation()
    
    it('should contain a correlation property with value "0.9978340665177264" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        correlation: 0.9978340665177264
      }))
    })
  })

  // Test #3
  describe('Test #3 After calculate Regression, see whether we get the right answer', () => {
    aCalculator = new Calculator()
    let inputArray = [[160,591,114,229,230,270,128,1657,624,1503],[186,699,132,272,291,331,199,1890,788,1601]]
    aCalculator.calculateRequirements(inputArray)
    // aCalculator.clacRegressionBetaOne()
    // aCalculator.clacRegressionBetaZero()
    
    it('should contain a Regression Beta One property with value "1.0913454583881113" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        regressionBetaOne: 1.0913454583881113
      }))
    })

    it('should contain a Regression Beta Zero property with value "38.005190611505896" ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        regressionBetaZero: 38.005190611505896
      }))
    })
  })
  
})