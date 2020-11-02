import React,{Component} from 'react';

class Welcome1 extends Component{
    constructor() {
        super()
        this.changeTo= this.changeTo.bind(this)
    }
    changeTo(){
        this.forceUpdate()
    }


    render() {
        return <div>
            <button onClick={this.changeTo}>Refresh</button>
            <p>{Math.random()}</p>
        </div>
    }
}
export default Welcome1;