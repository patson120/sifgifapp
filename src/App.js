
import './App.css';
import { Accueil } from './components/pages/Accueil';
import { Page4 } from './components/pages/Page4';

import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/modules" component={Page4} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
