//paginas
import Map from './paginas/map/Map';

//Styled components
import {StyledContainer} from './componentes/styles';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
        <Route path='/Map'>
          <Map />
          </Route>
        <Route path='/Home'>
          <About />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
//