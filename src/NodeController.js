class NodeController {
    constructor() {
        this.submitStatus = false;
    }

    addFileX(event) {
        aController.addFileX(event);
    }

    addFileY(event){
        aController.addFileY(event);
    }

    submitFiles() {
        aController.submitFiles();
        this.submitStatus = aController.submitStatus;
    }
    calcCorrelationRegression() {
        if (this.submitStatus != true){
            alert("Please submit two files first.");
        } else {
            aNode.resultRequest();
        }
        
    }
    resultRequest() {
        let files = aController.numbers[0] + '&' + aController.numbers[1];
        var xmlhttp, xxx;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                xxx = xmlhttp.responseText;
                // Luofeng's advice, converting JSON to object, to make node UI look better
                var obj = JSON.parse(xxx);
                document.getElementById('nodeCorrelation').innerHTML = obj.Correlation;
                document.getElementById('nodeRegressionBetaOne').innerHTML = obj.RegressionBetaOne;
                document.getElementById('nodeRegressionBetaZero').innerHTML = obj.RegressionBetaZero;
            }
        };
        xmlhttp.open('GET', 'http://localhost:3000/?' + files, true);
        xmlhttp.send();
    }
}
