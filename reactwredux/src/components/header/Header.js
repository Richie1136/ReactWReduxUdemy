import './Header.css';

import { useSelector } from 'react-redux'


import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()


  const isauth = useSelector(state => state.auth.isAuthenticated)

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className='header'>
      <h1>Redux Auth</h1>
      {isauth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
