//paginas
import Home from './paginas/Home';
import Inicio from './paginas/Inicio';
import Registro from './paginas/Registro';
import Dashboard from './paginas/Dashboard';
import Perfil from './paginas/Perfil';
import Busqueda from './paginas/Busqueda';
import Reportes from './paginas/Reportes';
import About from './paginas/About';
import Map from './paginas/map/Map';
import Navbar from './componentes/Navbar';
import Lugar from './paginas/Lugar';
import Calificación from './paginas/Calificación';

//Styled components
import {StyledContainer} from './componentes/styles';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HoodsProvider from './context/barriosContext';
import MapMarkerProvider from './context/mapMarkersContext';



function App() {
  return (
    <MapMarkerProvider>
    <HoodsProvider>
      <Router>
        <StyledContainer>
          <Switch>
          <Route path='/Map'>
          <Navbar />
            <Map />
            </Route>
          <Route path='/About'>
          <Navbar />
            <About />
            </Route>
          <Route path='/Reportes'>
          <Navbar />
            <Reportes/>
            </Route>
          <Route path='/Busqueda'>
          <Navbar />
            <Busqueda />
            </Route>
          <Route path='/Perfil'>
          <Navbar />
              <Perfil />
            </Route>
          <Route path='/Lugar'>
            <Navbar />
              <Lugar />
          </Route>
          <Route path='/Calificación'>
            <Navbar />
              <Calificación />
          </Route>
            <Route path='/Registro'>
              <Registro />
            </Route>
            <Route path='/Dashboard'>
            <Navbar />
            <Dashboard />
            </Route>
            <Route path='/Inicio'>
              <Inicio />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </StyledContainer>
      </Router>
    </HoodsProvider>
    </MapMarkerProvider>
  );
}

export default App;