// CSS
import './App.css';

// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Login from './components/Login/Login'
import Table from './components/Table/Table'
import PrivateRoute from './privateRoute/PrivateRoute';

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
