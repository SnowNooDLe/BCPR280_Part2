/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
Vue.component('C1', {
  template: '<div><input type="file" id="myFile" @change="addFiles" multiple><br><button v-if="files.length == 2" @click="submitFiles">Submit Files</button><br><button v-if = "status == true" @click="calcCorrelation">Show Correlation</button> <br> {{ correlation }}</div>',
  data: function() {
    return{
      files: [],
      numbers: [],
      status: false,
      correlation: "What Am I"
    }
  },
  methods:{
    addFiles: function(event){
      for (let aFile of event.target.files) {
        if (aFile.type === "text/plain") this.files.push(aFile);
      }
    },
    submitFiles: function(event){
      for (let file of this.files){
        const reader = new FileReader();

        reader.onload = e => {
          let ct = e.target.result.split('\r\n').map(x => parseFloat(x));
          console.log(ct);
          this.numbers.push(ct);
        }
        reader.readAsText(file);
        this.status = true;
      }
    },
    calcCorrelation: function(){
      let sumOfX = 0;
      let sumOfX2 = 0;
      let sumOfY = 0;
      let sumOfY2 = 0;
      let xTimesY = 0;
      let n = this.numbers[0].length;

      for (i = 0; i < n; i++){
        sumOfX += this.numbers[0][i];
        sumOfY += this.numbers[1][i];
        sumOfX2 += Math.pow(this.numbers[0][i], 2);
        sumOfY2 += Math.pow(this.numbers[1][i], 2);
        xTimesY += this.numbers[0][i] * this.numbers[1][i];
      }
      
      let numerator = (n * xTimesY) - (sumOfX * sumOfY);
      let left = n * sumOfX2 - Math.pow(sumOfX, 2);
      let right = n * sumOfY2 - Math.pow(sumOfY, 2);
      let denominator = Math.sqrt(left * right);

      this.correlation = numerator / denominator;
    }
  }
})

let app1 = new Vue({
  el: '#correlation-component'
})
