// to reduce duplication in Controller for Vue & Node
class Controller {
    constructor() {
        this.files = [];
        this.numbers = [];
        this.submitStatus = false;
        this.correlation = "I am correlation";
        this.regressionBetaOne = "I am regression beta one.";
        this.regressionBetaZero = "I am regression beta zero.";
    }

    addFile(event) {
        let aFile = event.target.files[0];
        if (aFile.type === "text/plain") this.files.push(aFile);
    }

    submitFiles() {
        if (this.files.length != 2){
            alert("You need to submit two files then click it again.");
          } else {
            for (let file of this.files){
              const reader = new FileReader();
              reader.onload = e => {
                let ct = e.target.result.split('\r\n').map(x => parseFloat(x));
                this.numbers.push(ct);
              }
              reader.readAsText(file);
            }
            this.submitStatus = true;
        }
    }

    calcCorrelation(){
        if (this.submitStatus != true){
            alert("Please submit two files first.");
          } else {
            aCalculator.calculateRequirements(this.numbers);
            aCalculator.calcCorrelation();
            this.correlation = aCalculator.correlation;
        }
    }

    calcRegression(){
        if (this.submitStatus != true){
            alert("Please submit two files first.");
          } else {
            aCalculator.clacRegressionBetaOne();
            aCalculator.clacRegressionBetaZero();
            this.regressionBetaOne = aCalculator.regressionBetaOne;
            this.regressionBetaZero = aCalculator.regressionBetaZero;
        }

        // after doing regression part, reset the value
        this.files = [];
        this.numbers = [];
        this.submitStatus = false;
    }
}