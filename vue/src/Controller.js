/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
Vue.component('C1', {
  template: '<div><input type="file" id="myFile" @change="addFiles" multiple><br><button v-if="files.length >= 2" @click="submitFiles">Submit Files</button></div>',
  data: function() {
    return{
      files: [],
      output: ""
    }
  },
  methods:{
    addFiles: function(event){
      for (let aFile of event.target.files) {
        if (aFile.type === "text/plain") this.files.push(aFile);
      }
    },
    submitFiles: function(event){
      const file = this.files[0];
      const reader = new FileReader();

      reader.onload = e => console.log(e.target.result);

      reader.readAsText(file);
    }
  }
})

let app1 = new Vue({
  el: '#correlation-component'
})
