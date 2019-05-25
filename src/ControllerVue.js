/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
Vue.component('c1', {
  template: '<div><input type="file" @change="addFile"><br><input type="file" @change="addFile"><br><br><button @click="submitFiles" class="btn btn-primary">Submit Files</button><br><br><button @click="calcCorrelation" class="btn btn-primary">Show Correlation</button> <br> {{ correlation }}<br><button @click="calcRegression" class="btn btn-primary">Show Regression</button> <br> <label>Regression Beta One </label> {{ regressionBetaOne }} <br> <label>Regression Beta Zero </label> {{ regressionBetaZero }}</div>',
  data: function() {
    return{
      files: [],
      numbers: [],
      submitStatus: false,
      correlation : "I am correlation",
      regressionBetaOne : "I am regression beta one.",
      regressionBetaZero : "I am regression beta zero."
    }
  },
  methods:{
    addFile: function(event){
      let aFile = event.target.files[0];
      if (aFile.type === "text/plain") this.files.push(aFile);
      
    },
    submitFiles: function(event){
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
    },
    calcCorrelation: function(){
      if (this.submitStatus != true){
        alert("Please submit two files first.");
      } else {
        aCalculator.calculateRequirements(this.numbers);
        aCalculator.calcCorrelation();
        this.correlation = aCalculator.correlation;
      }
    },
    calcRegression: function(){
      if (this.submitStatus != true){
        alert("Please submit two files first.");
      } else {
        aCalculator.clacRegressionBetaOne();
      aCalculator.clacRegressionBetaZero();
      this.regressionBetaOne = aCalculator.regressionBetaOne;
      this.regressionBetaZero = aCalculator.regressionBetaZero;
      }
    }
  }
})

let app1 = new Vue({
  el: '#app1'
})
