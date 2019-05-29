/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
Vue.component('c1', {
  template: '<div><input type="file" @change="addFileX"><br><input type="file" @change="addFileY"><br><br><button @click="submitFiles" class="btn btn-primary">Submit Files</button><br><br><button @click="calcCorrelationRegression" class="btn btn-primary">Show Correlation & Regression</button> <br> {{ correlation }}<br><label>Regression Beta One </label> {{ regressionBetaOne }} <br> <label>Regression Beta Zero </label> {{ regressionBetaZero }}</div>',
  data: function() {
    return{
      submitStatus: false,
      correlation : "I am correlation",
      regressionBetaOne : "I am regression beta one.",
      regressionBetaZero : "I am regression beta zero."
    }
  },
  methods:{
    addFileX: function(event){
      aController.addFileX(event);
    },
    addFileY: function(event){
      aController.addFileY(event);
    },
    submitFiles: function(){
      aController.submitFiles();
      this.submittatus = aController.submitStatus;
    },
    calcCorrelationRegression: function(){
      aController.calcCorrelationRegression();
      this.correlation = aController.correlation;
      this.regressionBetaOne = aController.regressionBetaOne;
      this.regressionBetaZero = aController.regressionBetaZero;
    }
  }
})

let app1 = new Vue({
  el: '#app1'
})
