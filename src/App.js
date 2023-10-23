import { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileScreen from './components/ProfileScreen';


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
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={!user ? <Login /> : <HomeScreen />}> </Route>
          <Route exact path="/profile" element={<ProfileScreen />}> </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
