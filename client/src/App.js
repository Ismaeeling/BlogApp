import Header from "./Components/Header/Header.jsx";
import Home from './Pages/Home/Home.jsx';
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/Write/Write.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Login />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Login />}
          </Route>
          <Route path="/post/:123"> 
            <Single />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
