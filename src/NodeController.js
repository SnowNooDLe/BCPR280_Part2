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
        this.submittatus = aController.submitStatus;
    }
    calcCorrelationRegression() {
        aNode.resultRequest();
    }
    resultRequest() {
        let files = aController.numbers[0] + '&' + aController.numbers[1];
        var xmlhttp, xxx;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                xxx = xmlhttp.responseText;
                document.getElementById('resultCorrelationRegression').innerHTML = xxx;
            }
        };
        xmlhttp.open('GET', 'http://localhost:3000/?' + files, true);
        xmlhttp.send();
    }
}
