import React, { Component} from 'react';
import './App.css';
import InputComp from './InputComp/InputComp';
import ValidationComp from './ValidationComp/ValidationComp';
import CharComp from './CharComp/CharComp';
import './CharComp.css';

class App extends Component {
  state = {
    inputString : "inputstring"
  }

  inputChangedHandler = (event) => {
    let locInputString = {...this.state.inputString};
    locInputString = event.target.value;
    this.setState({inputString : locInputString}); 
  };

  myClickedHandler = (index) => {
    let locString1 = this.state.inputString;
    let locString2 = locString1.slice(0,index) +locString1.slice(index + 1, locString1.length);
    this.setState({inputString : locString2});    
  } 

  render() {


    let locArr = this.state.inputString.split('');
    let locArr2 = locArr.map((el,index) => {
      return {el : el,
              id : index.toString()}
      });

    return (
    <div className="App">
      <p>Dit is de basis app</p>
      <InputComp 
        inputChanged = {this.inputChangedHandler}
        str={this.state.inputString}/>
      <ValidationComp 
        inputText={this.state.inputString}/>
      <div className="CharComp">
        {locArr2.map((el, index) => {
          return <CharComp myClicked={() => this.myClickedHandler(index)} char={el.el} key={el.id}/>})}
      </div>
    </div>
    )
  };
}

export default App;
