//paginas
import Recomendados from './paginas/Busqueda';
import Map from './paginas/map/Map';
import Home from './paginas/Home'

//Styled components
import {StyledContainer} from './componentes/styles';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
        <Route path='/Busqueda'>
          <Recomendados />
          </Route>
        <Route path='/Map'>
          <Map />
          </Route>
        <Route path='/'>
          <Home/>
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
//