var http = require('http');
var Calculator = require("./Model.js")
// var aCalculator = new Calculator
var app = http.createServer(function (request, response){
    response.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    })
    let dataXY = []
    // for first file
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

    var aCalculator = new Calculator()

    aCalculator.calculateRequirements(dataXY)
    aCalculator.calcCorrelation()
    let correlation = aCalculator.correlation
    aCalculator.clacRegressionBetaOne()
    let regressionBetaOne = aCalculator.regressionBetaOne
    aCalculator.clacRegressionBetaZero()
    let regressionBetaZero = aCalculator.regressionBetaZero

    let resultCorrelation = {
        "Correlation: " : correlation + "<br />" +
        "Regression Beta One: " + regressionBetaOne + "<br />" +
        "Regression Beta Zero: " + regressionBetaZero + "<br />"
    }

    resultCorrelation = JSON.stringify(resultCorrelation)
    response.write(resultCorrelation)
    response.end()
    
})

app.listen(3000);