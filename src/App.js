import { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {user ? <Login /> : <HomeScreen />}
    </div>
  );
};

export default App;
