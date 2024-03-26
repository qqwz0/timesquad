import Home from "./pages/StartPage/Home";
import LogIn from "./pages/LogInPage/LogIn";
//import SignUp from "./pages/SignUpPage/SignUp";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/log-in">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
