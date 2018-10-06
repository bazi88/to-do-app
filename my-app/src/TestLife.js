import React, { Component } from 'react';
import Counter from './Counter';

class TestLife extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    incrementCounter(){
        this.setState({
            counter:this.state.counter + 1
        })
    }
    render(){
        return(
            <div>
                <Counter counter={this.state.counter} />
                <button onClick={this.incrementCounter}>Click1</button>
            </div>
        )
    }
}
export default TestLife