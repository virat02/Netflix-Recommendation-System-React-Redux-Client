import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import history from "../History";
import "../styles/NavBar.css";
import Select from 'react-select';

const searchOptionsForAnonymous = [
    { label: "Movies", value: 1 },
    { label: "Actors", value: 2 },
];

const searchOptionsForLoggedInUser = [
    { label: "Movies", value: 1 },
    { label: "Actors", value: 2 },
    { label: "Users", value: 3 },
];

export default class NavBarComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            searchValue: "Movies",
            placeholder: "Search for Movies"
        }
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
            return <Link to={"/profile/" + this.props.localUsername}
                         className={'wbdv-link nav-link'}>
                Profile
                <span className={"sr-only"}>(current)</span>
            </Link>
        }
    }

    changeSearchType = searchValue =>
        this.setState({
            searchValue: searchValue,
            placeholder: "Search for "+ searchValue
        });

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
                                Netflix
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <input className={"form-control wbdv-search-bar input-lg"}
                                       type="text"
                                       placeholder={this.state.placeholder}
                                       onChange={()=> this.props.searchTextChanged(newSearchText.value)}
                                       ref={node => newSearchText=node}
                                       aria-label="Search"/>
                                <button className="btn btn-success wbdv-search-btn"
                                        type="button"
                                        onClick={()=>{
                                            if(this.props.searchText.length !== 0){
                                                if(this.state.searchValue === "Movies"){
                                                    history.push('/movies');
                                                    this.props.searchMoviesByKeyword(this.props.searchText);
                                                }
                                                else if(this.state.searchValue === "Actors") {
                                                    history.push('/actors');
                                                    this.props.searchActorsByKeyword(this.props.searchText);
                                                }
                                                else  if(this.state.searchValue === "Users") {
                                                    history.push('/users');
                                                    this.props.searchUsersByKeyword(this.props.searchText)
                                                }
                                            }
                                            else{
                                                if(this.state.searchValue === "Users") {
                                                    history.push('/users');
                                                    this.props.searchUsersByKeyword(this.props.searchText)
                                                }
                                            }
                                        }}>
                                    <span className={"text-center wbdv-search-btn-text"}>
                                    Search
                                    </span>
                                </button>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Select options={ this.props.localUsername === null ?
                                            searchOptionsForAnonymous : searchOptionsForLoggedInUser}
                                onChange={opt => this.changeSearchType(opt.label)}/>
                    </div>
                    <div className="col-md-4">
                        <div className="navbar" id="navbarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={`/`} className='wbdv-link nav-link'>
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
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