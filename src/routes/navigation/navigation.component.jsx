import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

const Navigation = () => {
const {currentUser} = useContext(UserContext);


console.log(currentUser);
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrwnLogo />
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>SHOP</Link>
            {
              currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) :(<Link className='nav-link' to='/auth'>SIGN IN</Link>)
            }
            
        </div>
      </div>
      <Outlet />
    </Fragment>
  );

}

export default Navigation;