
import './App.css';
import { Accueil } from './components/pages/Accueil';
// import { Index } from './components/pages/Index';
import { Page2 } from './components/pages/Page2';
import { Page3 } from './components/pages/Page3';
import { Page4 } from './components/pages/Page4';

import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Actualite } from './components/pages/Actualite';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (

    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Index} /> */}
        <Route exact path="/" component={Accueil} />
        <Route exact path="/criteres"  component={Page2} />
        <Route exact path="/services" component={Page3} />
        <Route exact path="/modules" component={Page4} />
        <Route exact path="/actualite" component={Actualite} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
