
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/Homes/About/About';
import Detail from './Pages/Homes/Detail/Detail';
import Doctors from './Pages/Homes/Doctors/Doctors';
import Footer from './Pages/Homes/Footer/Footer';
import Header from './Pages/Homes/Header/Header';
import Homes from './Pages/Homes/Homes/Homes';
import Login from './Pages/Homes/Login/Login';
import Notfound from './Pages/Homes/Notfound/Notfound';
import ProvideRoude from './Pages/Homes/PrivadeRoute/ProvideRoude';
import Register from './Pages/Homes/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Homes></Homes>
          </Route>
          <Route path="/homes">
            <Homes></Homes>
          </Route>
          <ProvideRoude ProvideRoude path="/doctors">
          <Doctors></Doctors>
          </ProvideRoude>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/Register'>
            <Register></Register>
          </Route>
          <Route path='/detail'>
            <Detail></Detail>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
