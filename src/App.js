import { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //alreadyLogged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        // Not logged In
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? <Login /> : <HomeScreen />}
    </div>
  );
};

export default App;
