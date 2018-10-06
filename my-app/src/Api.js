import React, { Component } from 'react';

class Api extends Component{
    constructor(props){
        super(props);
        this.state = {
            term:'',
            img:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            term:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const url = `http://www.splashbase.co/api/v1/images/${this.state.term}`
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            this.setState({
                term:'',
                img:data.url
            })
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}></input>
                    <button>Submit</button>
                </form>
                <img src={this.state.img} alt={this.state.term}/>
            </div>
        )
    }
}
export default Api;