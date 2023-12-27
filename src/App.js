import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import "./App.css";
import Skills from "./Components/Skills/Skills.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
      </Switch>
      <Skills/>
    </Router>
  );
}

export default App;
