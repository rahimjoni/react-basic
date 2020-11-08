import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SeasionDis from './SeasionDis';
import Loader from "./loader";

class LocationApp extends Component {
    constructor(props) {
        super(props);
        this.state={
            lat:null,
            error:""
        }
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude})
            },
            err=>{
                this.setState({error:err.message})
            }
        )
    }
    render() {
        if (this.state.lat){
            return (
                <div>
                    <SeasionDis lat={this.state.lat}></SeasionDis>
                </div>
            );
        }
        if (this.state.error){
            return (
                <div>
                    <p>Error : {this.state.error}</p>
                </div>
            );
        }
        return (
            <div>
                <Loader/>
            </div>
        );
    }
}

export default LocationApp;