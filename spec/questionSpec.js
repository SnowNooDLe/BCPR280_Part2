describe('Testing Calculation', () => {
  let aCalculator
  // Test #1
  describe('Test #1 After put two files and submitted, see whether it comes up with right values', () => {
    aCalculator = new Calculator()
    let inputArray = [[160,591,114,229,230,270,128,1657,624,1503],[186,699,132,272,291,331,199,1890,788,1601]]
    aCalculator.calculateRequirements(inputArray)
    
    it('Should pass the test with green as sum of array one is 5506 ', () => {
      expect(aCalculator).toEqual(jasmine.objectContaining({
        sumX: 5506
      }))
    })




  })
  
})