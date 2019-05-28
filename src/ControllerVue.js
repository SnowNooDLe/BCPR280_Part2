/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
Vue.component('c1', {
  template: '<div><input type="file" @change="addFile"><br><input type="file" @change="addFile"><br><br><button @click="submitFiles" class="btn btn-primary">Submit Files</button><br><br><button @click="calcCorrelation" class="btn btn-primary">Show Correlation</button> <br> {{ correlation }}<br><button @click="calcRegression" class="btn btn-primary">Show Regression</button> <br> <label>Regression Beta One </label> {{ regressionBetaOne }} <br> <label>Regression Beta Zero </label> {{ regressionBetaZero }}</div>',
  data: function() {
    return{
      submitStatus: false,
      correlation : "I am correlation",
      regressionBetaOne : "I am regression beta one.",
      regressionBetaZero : "I am regression beta zero."
    }
  },
  methods:{
    addFile: function(event){
      aController.addFile(event);
      
    },
    submitFiles: function(){
      aController.submitFiles();
      this.submittatus = aController.submitStatus;
    },
    calcCorrelation: function(){
      aController.calcCorrelation();
      this.correlation = aController.correlation;
    },
    calcRegression: function(){
      aController.calcRegression();
      this.regressionBetaOne = aController.regressionBetaOne;
      this.regressionBetaZero = aController.regressionBetaZero;
    }
  }
})

let app1 = new Vue({
  el: '#app1'
})
