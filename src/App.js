
import './App.css';
import { Accueil } from './components/pages/Accueil';
import { Page4 } from './components/pages/Page4';
import { Index } from './components/pages/Index';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import { DetailActu } from './components/pages/DetailActu';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/index" component={Accueil} />
        <Route exact path="/modules" component={Page4} />
        <Route exact path="/actualite/:id/detail" render={(props) => <DetailActu {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
