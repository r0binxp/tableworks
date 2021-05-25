import './App.css';
// react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// components
import Login from './components/Login/Login'
import Table from './components/Table/Table'
import { useSelector } from 'react-redux';

function App() {
  const sesionLogged = window.sessionStorage.getItem('logged')
  const logged = useSelector(store => store.logged)


  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/table" component={Table} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
