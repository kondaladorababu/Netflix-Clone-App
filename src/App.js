import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? <Login /> : <HomeScreen />}
    </div>
  );
};

export default App;
