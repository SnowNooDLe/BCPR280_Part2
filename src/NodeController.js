class NodeController {
    constructor() {
        this.filesList = [];
        this.numbers = [];
        this.test = 0;
        this.submitStatus = false;
        this.correlation = "I am correlation";
        this.regressionBetaOne = "I am regression beta one.";
        this.regressionBetaZero = "I am regression beta zero.";
    }

    addFile(event) {
        aController.addFile(event);
    }
    submitFiles() {
        aController.submitFiles();
        this.submittatus = aController.submitStatus;
    }
    calcCorrelation() {
        aNode.calculationRequest()
        // aController.calcCorrelation();
        // this.correlation = aController.correlation;
    }
    calcRegression() {
        aNode.calculationRequest()
        // aController.calcRegression();
        // this.regressionBetaOne = aController.regressionBetaOne;
        // this.regressionBetaZero = aController.regressionBetaZero;
    }
    calculationRequest() {
        let files = aController.numbers[0] + '&' + aController.numbers[1];
        console.log(files);
        var xmlhttp, xxx;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                xxx = xmlhttp.responseText;
                document.getElementById('result').innerHTML = xxx;
            }
        };
        xmlhttp.open('GET', 'http://localhost:3000/?' + files, true);
        xmlhttp.send();
    }
}
