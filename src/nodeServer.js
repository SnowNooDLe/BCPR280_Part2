var http = require('http');
var Calculator = require("./Model.js")
var aCalculator = new Calculator
var app = http.createServer(function (request, response){
    response.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    })

    if (request.url.substring(2, 5) == 'cor'){
        let dataXY = []
        let dataStart = request.url.indexOf("?") + 4
        let dataEnd = request.url.indexOf("&")
        let dataString = request.url.slice(dataStart, dataEnd)
        // convert to array at the ,
        let arrayOfStrings = dataString.split(",")
        // convert to number
        let dataX = arrayOfStrings.map(s => Number(s))
        dataXY.push(dataX);

        dataStart = request.url.indexOf("&") + 1
        dataString = request.url.slice(dataStart)
        // convert to array at the ,
        arrayOfStrings = dataString.split(",")
        // convert to number
        let dataY = arrayOfStrings.map(s => Number(s))
        dataXY.push(dataY)

        console.log(dataXY)

        aCalculator.calculateRequirements(dataXY)
        aCalculator.calcCorrelation()
        let correlation = aCalculator.correlation

        let resultCorrelation = {
            "Correlation: ": correlation
        }

        resultCorrelation = JSON.stringify(resultCorrelation)
        response.write(resultCorrelation)
        response.end()
    } else if (request.url.substring(2, 5) == 'reg'){
        let dataXY = []
        let dataStart = request.url.indexOf("?") + 4
        let dataEnd = request.url.indexOf("&")
        let dataString = request.url.slice(dataStart, dataEnd)
        // convert to array at the ,
        let arrayOfStrings = dataString.split(",")
        // convert to number
        let dataX = arrayOfStrings.map(s => Number(s))
        dataXY.push(dataX);

        dataStart = request.url.indexOf("&") + 1
        dataString = request.url.slice(dataStart)
        // convert to array at the ,
        arrayOfStrings = dataString.split(",")
        // convert to number
        let dataY = arrayOfStrings.map(s => Number(s))
        dataXY.push(dataY)


        aCalculator.calculateRequirements(dataXY)
        aCalculator.calcCorrelation()
        aCalculator.clacRegressionBetaOne()
        let regressionBetaOne = aCalculator.regressionBetaOne
        aCalculator.clacRegressionBetaZero()
        let regressionBetaZero = aCalculator.regressionBetaZero
        
        console.log("regression from nodeServer.js : " + regressionBetaOne + " " + regressionBetaZero)

        let resultRegression = {
            "Regression Beta One: ": regressionBetaOne,
            "Regression Beta Zero: ": regressionBetaZero
        }

        resultRegression = JSON.stringify(resultRegression)
        response.write(resultRegression)
        response.end()
    } else {

    }
    
})

app.listen(3000);