import React, {Component} from 'react';
import './App.css';
import InputMessage from './InputMessage';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      postedMessages:[],
      inputValues:
        {
          inputName:'',
          inputTopic:'',
          inputMessage:''
        }
    };
    this.inputNameHandler = this.inputNameHandler.bind(this);
    this.inputTopicHandler = this.inputTopicHandler.bind(this);
    this.inputMessageHandler = this.inputMessageHandler.bind(this);
    this.clickSendHandler = this.clickSendHandler.bind(this);
  }  

  inputNameHandler(event){
    event.persist();
    this.setState(prevState => ({
      inputValues: {
        ...prevState.inputValues,
        inputName:event.target.value
      }
    }))
  }
  inputTopicHandler(event){
    event.persist();
    this.setState(prevState => ({
      inputValues: {
        ...prevState.inputValues,
        inputTopic:event.target.value
      }
    }))
  }
  inputMessageHandler(event){
    event.persist();
    this.setState(prevState => ({
      inputValues: {
        ...prevState.inputValues,
        inputMessage:event.target.value
      }
    }))
  }
  clickSendHandler(event){
    event.preventDefault();
    this.setState({
      postedMessages: this.state.postedMessages.concat(this.state.inputValues)
    });
  }
  render(){
    return (
      <div className="container mt-5">
        <InputMessage 
          clickSendFunc={this.clickSendHandler}
          inputNameFunc={this.inputNameHandler}
          inputTopicFunc={this.inputTopicHandler}
          inputMessageFunc={this.inputMessageHandler} />
      </div>
    );
  }
}
