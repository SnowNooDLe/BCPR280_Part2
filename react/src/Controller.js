/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */

class Calculation extends React.Component{
  constructor (props){
    super(props);
    this.files = [];
    this.numbers = [];
    this.status = false;
    this.correlation = "What Am I ";
    
    this.state = {
      cc: new Calculator()
    }

    this.calcCorrelation = this.calcCorrelation.bind(this);
  }

  addFiles(event){
    for (aFile of event.target.files){
      if (aFile.type === "text/plain") this.files.push(aFile);
    }
  }

  submitFiles(event){
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
  }

  calcCorrelation (event) {
    this.state.cc.calcCorrelation(this.numbers);
    
  }

  render () {
    return (
      <div>
        <input type="file"></input>
        <input type="file" id="myFile" onClick={this.addFiles} multiple></input>
        <br>
        <button v-if="files.length == 2" onClick={this.submitFiles}>Submit Files</button>
        </br>
        <br>
        </br>
        <button v-if = "status == true" onClick={this.calcCorrelation}>Show Correlation</button>
        <br> 
        </br>
        { correlation }
      </div>
    )
  }
}

const element = <Calculation />

ReactDOM.render(
  element,
  document.getElementById('correlation-component')
)