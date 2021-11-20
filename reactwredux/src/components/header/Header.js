import './Header.css';

import { useSelector } from 'react-redux'




const Header = () => {

  const isauth = useSelector(state => state.auth.isAuthenticated)

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
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
