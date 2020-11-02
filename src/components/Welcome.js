import React,{Component} from 'react';

class Welcome extends Component{
    constructor() {
        super()
        this.state = {
            /*name:"Abdur Rahim",
            age:["28","30"],
            weight:{
                class10:"20kg",
                class12:"40kg"
            }*/
            login:false
        }
    }
    doThisClass(a){
        this.setState({name:a})
    }
    doThisChangeClass(b){
        this.setState({age:b})
    }
    render() {
        /*if (this.state.login == true){
            return <div>
                <button>Logout</button>
            </div>;
        }
        else {
            return <div>
                <h3>My name is {this.state.name}</h3>
            <h3>My age is {this.state.age[1]}</h3>
            <h4>My weight {this.state.weight.class10}</h4>
            <button class="btn btn-success btn-sm" onClick={this.doThisClass.bind(this, "Joni")}>Change Name</button>
            <button class="btn btn-success btn-sm" onClick={this.doThisChangeClass.bind(this, "23")}>Change Age</button>
                <button>Login</button>
            </div>;
        }*/
        return this.state.login?'Logout':'Login'
    }
}
export default Welcome;