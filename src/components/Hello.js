import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Hello = (props)=>{
    const doThis = (a)=>{
        alert(a)
    }

    return <div>
        <h4>I am from {props.name}</h4>
        <button class="btn btn-success btn-sm" onClick={doThis.bind(this,"This is from function")}>Click here</button>
    </div>
}
export default Hello;