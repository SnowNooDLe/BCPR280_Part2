/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
// Used this Model for first four iterations
class Calculator {
  constructor () {
    this.sumOfX = 0;
    this.sumOfX2 = 0;
    this.sumOfY = 0;
    this.sumOfY2 = 0;
    this.xTimesY = 0;

    this.numerator = 0;
    this.left = 0;
    this.right = 0;
    this.denominator = 0;

    this.correlation = 0;
  }

  calcCorrelation(inputArray){
    console.log("OH ME HERE");
    let n = inputArray[0].length;

    for (let i = 0; i < n; i++){
      this.sumOfX += inputArray[0][i];
      this.sumOfY += inputArray[1][i];
      this.sumOfX2 += Math.pow(inputArray[0][i], 2);
      this.sumOfY2 += Math.pow(inputArray[1][i], 2);
      this.xTimesY += inputArray[0][i] * inputArray[1][i];
    }
    
    this.numerator = (n * this.xTimesY) - (this.sumOfX * this.sumOfY);
    this.left = n * this.sumOfX2 - Math.pow(this.sumOfX, 2);
    this.right = n * this.sumOfY2 - Math.pow(this.sumOfY, 2);
    this.denominator = Math.sqrt(this.left * this.right);

    return this.correlation = this.numerator / this.denominator;
  }
}

// module.exports = Calculator;