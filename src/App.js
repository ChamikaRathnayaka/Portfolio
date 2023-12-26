import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <About/>
        </Route>
       
      </Switch>
      
    </Router>
  );
}

export default App;
