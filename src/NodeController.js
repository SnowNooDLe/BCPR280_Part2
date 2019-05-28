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
        aNode.correlationRequest();
    }
    calcRegression() {
        aNode.regressionRequest();
    }

    correlationRequest() {
        let files = aController.numbers[0] + '&' + aController.numbers[1];
        var xmlhttp, xxx;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                xxx = xmlhttp.responseText;
                document.getElementById('resultCorrelation').innerHTML = xxx;
            }
        };
        xmlhttp.open('GET', 'http://localhost:3000/?' + 'cor' + files, true);
        xmlhttp.send();
    }

    regressionRequest() {
        let files = aController.numbers[0] + '&' + aController.numbers[1];
        var xmlhttp, xxx;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                xxx = xmlhttp.responseText;
                document.getElementById('resultRegression').innerHTML = xxx;
            }
        };
        xmlhttp.open('GET', 'http://localhost:3000/?' + 'reg' + files, true);
        xmlhttp.send();
    }
}
