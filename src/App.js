import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import CharactersId from "./containers/Characters";
import Header from "./components/Header";
import { useState } from "react";
import Cookies from "js-cookie";

const App = () => {
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header setSearch={setSearch} />
        <Switch>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route exact path="/comics/:characterId">
            <CharactersId />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
