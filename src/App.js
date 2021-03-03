import './App.css';
import Login from './components/Login/Login'
import { useSelector } from 'react-redux';

function App() {
  const sesionLogged = window.sessionStorage.getItem('logged')
  const logged = useSelector(store => store.logged)


  return (
    <>
      {logged || sesionLogged ? <h1>La Tabla</h1> : <Login />}
    </>
  );
}

export default App;
