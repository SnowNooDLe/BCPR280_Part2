// CommonJS Modules, one ECMAScript 5 module systems, in Node.js
const {
  readFile,
  appendFileSync
} = require('fs')


/* 
// when using fs.promises API of Node
const fs = require('fs')
const fsPromises = fs.promises 
*/


const Calc = require('./src/Model.js')
let calc = new Calc()

let inFileA = process.argv[2]
let inFileB = process.argv[3]
let outFile = process.argv[4]
let dataArray = [[],[]]

readFile(inFileA, 'utf8', (error, text) => {
  if (error) {
    throw error
  }

  dataArray[0] = text.split('\r\n').map(x => parseFloat(x))
  readFile(inFileB, 'utf8', (error, text) => {
    if (error) {
      throw error
    }
  
    dataArray[1] = text.split('\r\n').map(x => parseFloat(x))

    calc.calculateRequirements(dataArray)
    calc.calcCorrelation()
    calc.clacRegressionBetaOne()
    calc.clacRegressionBetaZero()

    let correlation = calc.correlation
    let regressionBetaOne = calc.regressionBetaOne
    let regressionBetaZero = calc.regressionBetaZero

    try {
      appendFileSync(outFile, 'Correlation is : ' + correlation + '\r\n')
      appendFileSync(outFile, 'Regression Beta One is : ' + regressionBetaOne + '\r\n')
      appendFileSync(outFile, 'Regression Beta Zero is : ' + regressionBetaZero + '\r\n')
    } catch (err) {
        console.log(err)
    }
  })
})




