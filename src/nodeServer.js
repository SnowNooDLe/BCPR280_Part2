var http = require('http');
var Calculator = require("./Model.js")
// var aCalculator = new Calculator
var app = http.createServer(function (request, response){
    response.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    })
    let dataXY = []
    // INPUT PROCESSING
    // for first file
    // find characters after ?
    let dataStart = request.url.indexOf("?") + 1
    let dataEnd = request.url.indexOf("&")
    let dataString = request.url.slice(dataStart, dataEnd)
    // convert to array at the ,
    let arrayOfStrings = dataString.split(",")
    // convert to number
    let dataX = arrayOfStrings.map(s => Number(s))
    dataXY.push(dataX);

    // for second file
    dataStart = request.url.indexOf("&") + 1
    dataString = request.url.slice(dataStart)
    // convert to array at the ,
    arrayOfStrings = dataString.split(",")
    // convert to number
    let dataY = arrayOfStrings.map(s => Number(s))
    dataXY.push(dataY)

    // CALCULATION
    var aCalculator = new Calculator()

    aCalculator.calculateRequirements(dataXY)
    aCalculator.calcCorrelation()
    let correlation = aCalculator.correlation
    aCalculator.clacRegressionBetaOne()
    let regressionBetaOne = aCalculator.regressionBetaOne
    aCalculator.clacRegressionBetaZero()
    let regressionBetaZero = aCalculator.regressionBetaZero

    // OUTPUT PROCESSING
    let resultCorrelation = {
        "Correlation" : correlation,
        "RegressionBetaOne" : regressionBetaOne,
        "RegressionBetaZero" : regressionBetaZero
    }

    resultCorrelation = JSON.stringify(resultCorrelation)
    response.write(resultCorrelation)
    response.end()
    
})

app.listen(3000);