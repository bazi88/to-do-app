import React, { Component } from 'react';
import './App.css';
import List from './List'
import Increment from './Increment';
import Api from './Api';
import TestLife from './TestLife';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    console.log(this.state.term);
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List item={this.state.items}/>
        <Increment></Increment>
        <Api></Api>
        <TestLife></TestLife>
      </div>
    );
  }
}
