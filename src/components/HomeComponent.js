import React, {Component} from 'react';
import "../styles/Home.css";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container overlay">
                <img
                    src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="
                    alt=""/>
                <p className="title">card title</p>

                <div className="button"><a href="#"> BUTTON </a></div>
            </div>
    )}
}