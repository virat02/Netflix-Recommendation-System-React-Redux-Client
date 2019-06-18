import NavBarComponent from "../components/NavBarComponent";
import * as actions from "../actions";
import {connect} from "react-redux";

const stateToPropertyMapper = (state) => ({
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = (dispatch) => ({
    logOut: () => actions.logOut(dispatch),
});

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBarComponent);

export default NavBarContainer;