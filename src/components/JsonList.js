import React, { Component } from 'react';
import ReactDom from 'react-dom';

class JsonList extends Component {
    render() {
        const mylist = [
            {
                city :'Dhaka',
                zip: 4983
            },
            {
                city:'Khulna',
                zip: 3233
            },
            {
                city: 'Jessore',
                zip: 4522
            },
        ]
        const mylistItem = mylist.map((data)=>{
            return <option>{data.city}</option>
        })

        return (
            <div>
                <select>{mylistItem}</select>
            </div>
        );
    }
}

export default JsonList;