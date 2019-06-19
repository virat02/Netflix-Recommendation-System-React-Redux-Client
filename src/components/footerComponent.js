import React, {Component} from 'react'
import '../styles/Footer.css';

export default class footerComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer id={"site-footer"} className={"fixed-bottom row text-center"}>
                <div className="col-md-4">
                    <div className={"row"}>
                        <div className={"col-md-6"}>Contact Us</div>
                        <div className={"col-md-6"}>About</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>&copy; 2019: A Northeastern University Project</div>
                </div>
                <div className="col-md-4">
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-facebook-square text-black-50"/>
                    </a>
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-twitter-square text-black-50"/>
                    </a>
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-google-plus-square text-black-50"/>
                    </a>
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-linkedin-square text-black-50"/>
                    </a>
                </div>
            </footer>
        )
    }
}