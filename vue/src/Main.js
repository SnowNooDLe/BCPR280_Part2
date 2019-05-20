/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
// Used this Model for first four iterations
class Game {
  constructor () {
    this.count = 0
          // 0 ~ 99
    this.generatedNum = Math.floor(Math.random() * 100)
    // debug purpose for Q4
      // this.generatedNum = 1
          // special attributes for Q3 and Q4
    this.min = 0
    this.max = 99
  }

  generateNumberByGame () {
    return this.generatedNum
  }

  getCountValue () {
    return this.count
  }

      // Added while Q2 as I could see duplication process
      // convert string int int as we are receiving as String
  convertToInteger (value) {
    return parseInt(value)
  }
  }

// Class for Iteration 1
class Q1 extends Game {
    // Override
  compareNumbers (input, randomNum) {
        // Added after Test#4, Test#6
        // checking input is valid integer or not
    if (!Number.isInteger(input)) {
      return 'Invalid Try, please put integer value in to guess'
    }
    if (input > 99 || input < 0) {
      return 'Randomly generated number is between 0 and 99'
    }
    this.count++
    if (input < randomNum) {
      return 'Try Higher'
    } else if (input > randomNum) {
      return 'Try Lower'
    } else if (input === randomNum) {
      return `You got it in ${this.count} trials!`
    } else {
            // something gone wrong
      return 'Something is not right !'
    }
  }
}