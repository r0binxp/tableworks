import './App.css';
// components
import Login from './components/Login/Login'
import Table from './components/Table/Table'
import { useSelector } from 'react-redux';

function App() {
  const sesionLogged = window.sessionStorage.getItem('logged')
  const logged = useSelector(store => store.logged)


  return (
    <>
      {logged || sesionLogged ? <Table /> : <Login />}
    </>
  );
}

export default App;
