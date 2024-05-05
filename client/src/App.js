import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login } from "./auth/Login.js";
import { Registration } from "./auth/Registration.js"; // Import the Registration component
import { Home } from "./pages/Home/Home.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, [isAuthenticated]);

  return (
    <Router>
        <Switch>
            <Route path="/login" render={() => isAuthenticated ? <Redirect to="/products" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" render={() => isAuthenticated ? <Redirect to="/products" /> : <Registration setIsAuthenticated={setIsAuthenticated} />} /> // Route for registration page
            <Route path="/products" render={() => <Home setIsAuthenticated={setIsAuthenticated} />} />
            <Redirect to="/login" />
        </Switch>
    </Router>
  )
}

export default App;
