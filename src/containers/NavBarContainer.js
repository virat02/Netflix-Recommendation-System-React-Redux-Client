import NavBarComponent from "../components/NavBarComponent";
import * as actions from "../actions";
import {connect} from "react-redux";

const stateToPropertyMapper = state => ({
    searchText: state.MoviesReducer.searchText,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = dispatch => ({
    searchTextChanged: newText => actions.searchTextChanged(dispatch, newText),
    searchMoviesByKeyword: movieTitle => actions.searchMoviesByKeyword(dispatch, movieTitle),
    logOut: () => actions.logOut(dispatch),
});

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBarComponent);

export default NavBarContainer;