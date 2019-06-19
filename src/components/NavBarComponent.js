import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import history from "../History";
import "../styles/NavBar.css";

export default class NavBarComponent extends Component{
    constructor(props){
        super(props);
    }

    renderLogin() {
        if(this.props.localUsername !== null){
            return <Link to={""} id={"logoutLink"}
                         className={"wbdv-link nav-link"}
                         onClick={this.props.logOut}>Logout</Link>
        } else {
            return <Link to={`/login`} className={'wbdv-link nav-link'}>
                Login
                <span className={"sr-only"}>(current)</span>
            </Link>
        }
    }

    renderRegisterProfile() {
        if(this.props.localUsername == null){
            return <Link to={`/register`} className={'wbdv-link nav-link'}>
                Register
                <span className={"sr-only"}>(current)</span>
            </Link>
        } else {
            return <Link to={"/profile/" + this.props.localUsername + "/view"} className={'wbdv-link nav-link'}>
                Profile
                <span className={"sr-only"}>(current)</span>
            </Link>
        }
    }

    render() {
        let newSearchText;
        let userRole = '';
        if(this.props.localUsername) {
            userRole = this.props.localRole ? this.props.localRole : ''
        }
        return(
            <header className={"container-fluid"}>
                <nav className={"navbar navbar-expand-md navbar-dark fixed-top row"}>
                    <div className={"col-md-2"}>
                        <a className={"navbar-brand"} href={"/"}>
                            <span>
                                Movie Search
                            </span>
                        </a>
                    </div>
                    <div className={"col-md-6"}>
                        <form className={"form-inline row"}>
                            <div className={"col-md-12 wbdv-search-box"}>
                                <input className={"form-control wbdv-search-bar input-lg"}
                                       type={"text"} placeholder={"Enter movie name to search"}
                                       onChange={()=> this.props.searchTextChanged(newSearchText.value)}
                                       ref={node => newSearchText=node}
                                       aria-label={"Search"}/>
                                <button className={"btn btn-success wbdv-search-btn"}
                                        type={"button"}
                                        onClick={()=>{
                                            history.push('/movies');
                                            if(this.props.searchText.length !== 0){
                                                this.props.searchMoviesByKeyword(this.props.searchText);
                                            }
                                        }}>
                                    <span className={"text-center wbdv-search-btn-text"}>
                                    Search
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={"navbar"} id={"navbarCollapse"}>
                            <ul className={"navbar-nav"}>
                                <li className={"nav-item"}>
                                    <Link to={`/`} className={'wbdv-link nav-link'}>
                                        Home
                                        <span className={"sr-only"}>(current)</span>
                                    </Link>
                                </li>
                                {userRole &&
                                userRole === 'Moderator' &&
                                <li className={"nav-item"}>
                                    <Link to={`/moderatorConsole`} className={'wbdv-link nav-link'}>
                                        Moderator-Console
                                        <span className={"sr-only"}>(current)</span>
                                    </Link>
                                </li>}
                                {userRole &&
                                userRole === 'Admin' &&
                                <li className={"nav-item"}>
                                    <Link to={`/console`} className={'wbdv-link nav-link'}>
                                        Admin-Console
                                        <span className={"sr-only"}>(current)</span>
                                    </Link>
                                </li>}
                                <li className={"nav-item"}>
                                    {this.renderLogin()}
                                </li>
                                <li className={"nav-item"}>
                                    {this.renderRegisterProfile()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}