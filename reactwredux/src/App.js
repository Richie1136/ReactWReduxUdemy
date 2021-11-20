import Counter from "./components/counter/Counter";
import Header from './components/header/Header'
import Auth from './components/auth/Auth'
import UserProfile from "./components/userprofile/UserProfile";
import { useSelector } from 'react-redux'




function App() {

  const isauth = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {!isauth && <Auth />}
      {isauth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
