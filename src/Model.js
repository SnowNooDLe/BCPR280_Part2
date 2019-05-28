/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
// Used this Model for first four iterations
class Calculator {
  constructor() {
    this.sumX = 0;
    this.sumXSquare = 0;
    this.sumY = 0;
    this.sumYSquare = 0;
    this.sumXY = 0;
    this.meanX = 0;
    this.meanY = 0;
    this.betaOne = 0;
    this.betaTwo = 0;
    this.dataLength = 0;
    this.correlation = "I am correlation";
    this.regressionBetaOne = "I am regression beta one.";
    this.regressionBetaZero = "I am regression beta zero.";
  }
  calculateRequirements(inputArray) {
    this.dataLength = inputArray[0].length;

    for (let i = 0; i < this.dataLength; i++) {
      this.sumX += inputArray[0][i];
      this.sumY += inputArray[1][i];
      this.sumXSquare += Math.pow(inputArray[0][i], 2);
      this.sumYSquare += Math.pow(inputArray[1][i], 2);
      this.sumXY += inputArray[0][i] * inputArray[1][i];
    }
    this.meanX = this.sumX / this.dataLength;
    this.meanY = this.sumY / this.dataLength;
  }
  calcCorrelation() {
    let numerator = (this.dataLength * this.sumXY) - (this.sumX * this.sumY);
    let left = this.dataLength * this.sumXSquare - Math.pow(this.sumX, 2);
    let right = this.dataLength * this.sumYSquare - Math.pow(this.sumY, 2);
    let denominator = Math.sqrt(left * right);
    this.correlation = numerator / denominator;
  }
  clacRegressionBetaOne() {
    let numerator = (this.sumXY - this.dataLength * this.meanX * this.meanY);
    let denominator = (this.sumXSquare - this.dataLength * Math.pow(this.meanX, 2));
    this.regressionBetaOne = numerator / denominator;
  }
  clacRegressionBetaZero() {
    this.regressionBetaZero = this.meanY - this.regressionBetaOne * this.meanX;
  }
}

module.exports = Calculator;