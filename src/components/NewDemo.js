import React, { Component } from 'react';
import ReactDom from 'react-dom';

class NewDemo extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            mobile:"",
            description:"",
        }
    }
    changeValue=(event)=>{
        var getdata = event.target.name;
        var getvalue = event.target.value;
        this.setState({[getdata]:getvalue})

        if(getdata === "name"){
            var namePattern = /^[a-zA-Z ]{2,40}$/;
            if(!namePattern.test(getvalue)){
                this.setState({name:"Name not valid"})
            }
        }

        if(getdata === "mobile"){
            if(!Number(getvalue)){
                this.setState({name:"Mobile not valid"})
            }
        }
    }
    render() {
        return (
            <div>
                <form>
                    <h3>Input data</h3>
                    <input type="text" name="name" onChange={this.changeValue}></input>
                    <input type="mobile" name="mobile" onChange={this.changeValue}></input><br></br>
                    <textarea name="description" onChange={this.changeValue} placeholder="Write here"></textarea>
                    <br></br>
                    <br></br>
                    <select>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                    </select>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
                </form>
                <hr></hr>
                <br></br>
                <h3>Output data</h3>
        <p>{this.state.name}</p>
        <p>{this.state.mobile}</p>
        <p>{this.state.description}</p>
            </div>
        );
    }
}

export default NewDemo;