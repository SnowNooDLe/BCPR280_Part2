var http = require('http');
var Calculator = require("./Model.js")
var aCalculator = new Calculator
var app = http.createServer(function (request, response){
    response.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    })
    let dataXY = []
    let dataStart = request.url.indexOf("?") + 1
    let dataEnd = request.url.indexOf("&")
    let dataX = request.url.slice(dataStart, dataEnd)
    dataXY.push(dataX);

    dataStart = request.url.indexOf("&") + 1
    let dataY = request.url.slice(dataStart)
    dataXY.push(dataY)

    console.log(dataX)
    console.log(dataY)
    console.log(dataXY)

    aCalculator.calculateRequirements(dataXY)
    aCalculator.calcCorrelation()
    let correlation = aCalculator.correlation
    aCalculator.clacRegressionBetaOne()
    let regressionBetaOne = aCalculator.regressionBetaOne
    aCalculator.clacRegressionBetaZero()
    let regressionBetaZero = aCalculator.regressionBetaZero

    let result = {
        "Correlation: ": correlation,
        "Regression Beta One: ": regressionBetaOne,
        "Regression Beta Zero: ": regressionBetaZero
    }

    result = JSON.stringify(result)
    response.write(result)
    response.end()
})

app.listen(3000);