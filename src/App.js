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
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Table} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
