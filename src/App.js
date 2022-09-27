//paginas
import Busqueda from './paginas/Busqueda';
import Map from './paginas/map/Map';
import Home from './paginas/Home'

//Styled components
import {StyledContainer} from './componentes/styles';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HoodsProvider from './context/barriosContext';

function App() {
  return (
    <HoodsProvider>
      <Router>
        <StyledContainer>
          <Switch>
          <Route path='/Busqueda'>
            <Busqueda />
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
    </HoodsProvider>
  );
}

export default App;
//