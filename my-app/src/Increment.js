import React, { Component } from 'react';

class Increment extends Component{
    constructor(){
        super();
        this.state ={
            clicks:0,
            show: true
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.hide = this.hide.bind(this);
    }
    increment(){
        this.setState({
            clicks : this.state.clicks + 1
        })
    }
    decrement(){
        this.setState({
            clicks : this.state.clicks - 1
        })
    }
    hide(){
        this.setState({
            show : !this.state.show
        })
    }
    render(){
        return(
            <div className="button-list">
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.hide}>{this.state.show ? 'Show' : 'Hide'}</button>
                {this.state.show ? <h5>{this.state.clicks}</h5> : ''}
            </div>
        )
    }
}
export default Increment;