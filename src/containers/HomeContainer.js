import {connect} from "react-redux";
import HomeComponent from "../components/HomeComponent";

// const stateToPropertyMapper = (state) => ({
//     localUsername: state.LocalStorageReducer.localUsername,
//     localRole: state.LocalStorageReducer.localRole
// });
//
// export const dispatcherToPropsMapper = (dispatch) => ({
//     logOut: () => actions.logOut(dispatch),
// });

const NavBarContainer = connect()(HomeComponent);

export default NavBarContainer;