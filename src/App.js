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
import {StyledContainer} from './componentes/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HoodsProvider from './context/barriosContext';
import MapMarkerProvider from './context/mapMarkersContext';
import AuthProvider from './context/authContext';
import Protectedroutes from './componentes/Protectedroutes';

export const serverURL = 'http://ec2-3-239-169-93.compute-1.amazonaws.com:4000/'

function App() {
  return (
    <AuthProvider>
    <MapMarkerProvider>
    <HoodsProvider>
      <Router>
        <StyledContainer>
          <Switch>
          <Route path='/Map'>
            <Protectedroutes>
              <Navbar />
              <Map />
            </Protectedroutes>
          </Route>
          <Route path='/About'>
          <Protectedroutes>
            <Navbar />
            <About />
          </Protectedroutes>  
          </Route>
          <Route path='/Reportes'>
          <Protectedroutes>
            <Navbar />
            <Reportes/>
          </Protectedroutes>
          </Route>
          <Route path='/Busqueda'>
          <Protectedroutes>
            <Navbar />
            <Busqueda />
          </Protectedroutes>
          </Route>
          <Route path='/Perfil'>
          <Protectedroutes>
            <Navbar />
            <Perfil />
          </Protectedroutes>
          </Route>
          <Route path='/Lugar'>
          <Protectedroutes>
            <Navbar />
            <Lugar />
          </Protectedroutes>
          </Route>
          <Route path='/Calificación'>
          <Protectedroutes>
            <Navbar />
            <Calificación />
          </Protectedroutes>  
          </Route>
            <Route path='/Registro'>
              <Registro />
            </Route>
            <Route path='/Dashboard'>
            <Protectedroutes>
              <Navbar />
              <Dashboard />
            </Protectedroutes>  
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
    </AuthProvider>
  );
}

export default App;