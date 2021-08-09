import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from 'pages/About'
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Works from 'pages/Works'
import Exercices from "components/Exercices";
import CaseStudy from "components/CaseStudy";
import ConcreteCase from "components/ConcreteCase";
import Navigation from "components/Navigation";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <div className="links">
          <Navigation/>
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/works" exact component={Works}/>
          <Route path="/works/exercices" component={Exercices}/>
          <Route path="/works/case_study" component={CaseStudy}/>
          <Route path="/works/concrete_case" component={ConcreteCase}/>
          <Route path="/" component={NotFound}/>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
