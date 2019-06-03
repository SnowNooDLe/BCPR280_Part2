// to reduce duplication in Controller for Vue & Node
class Controller {
    constructor() {
        this.files = [[],[]];
        this.numbers = [[],[]];
        this.submitStatus = false;
        this.correlation = "I am correlation";
        this.regressionBetaOne = "I am regression beta one.";
        this.regressionBetaZero = "I am regression beta zero.";
    }

    // updated version of Add File as it did not work in case user try more than once.
    addFileX(event) {
        let aFile = event.target.files[0];
        if (aFile.type === "text/plain"){
          this.files[0] = aFile;
        } 
    }

    addFileY(event){
      let aFile = event.target.files[0];
      if (aFile.type === "text/plain"){
        this.files[1] = aFile;
      }
    }

    // updated version so it still works with new files by user changing
    submitFiles() {
      // To check whether user puts 2 datas
      if (this.files[0].length == 0 || this.files[1].length == 0){
          alert("You need to submit two files then click it again.");
      } else {
        var order = 0;
        for (let file of this.files){
          const reader = new FileReader();
          reader.onload = e => {
            let ct = e.target.result.split('\r\n').map(x => parseFloat(x));
            this.numbers[order] = ct;
            order++;
          }
          reader.readAsText(file);
        }
        this.submitStatus = true;
      }
    }

    // combined Calcuating correlation and regression as one method as i couldnt figure two different method 
    // for displaying two values at the same time for react.
    calcCorrelationRegression(){
      // otherwise it keeps old constructor.
      var aCalculator = new Calculator();
      aCalculator.calculateRequirements(this.numbers);
      if (this.submitStatus != true){
        alert("Please submit two files first.");
      } else {
        aCalculator.calcCorrelation();
        this.correlation = aCalculator.correlation;
        aCalculator.clacRegressionBetaOne();
        aCalculator.clacRegressionBetaZero();
        this.regressionBetaOne = aCalculator.regressionBetaOne;
        this.regressionBetaZero = aCalculator.regressionBetaZero;
      }
    }
}