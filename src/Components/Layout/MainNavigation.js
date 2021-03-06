import react,{useContext} from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const authCTX=useContext(AuthContext);
  const isLoggedIn=authCTX.isLoggedIn;
  const history=useHistory();

  const handleLogOut=()=>{
    console.log(authCTX);
    authCTX.logOut();
    console.log(history);
    history.replace('/auth');
    // <Redirect to='/auth' />
    // <Redirect to='/auth' />
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn &&(
            <li>
            <Link to='/auth'>Login</Link>
          </li>
          )}
         
          {
          isLoggedIn && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          )
          }
          
          {
          isLoggedIn && (
          <li>
            <button  onClick={handleLogOut}>Logout</button>
          </li>
          )
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
