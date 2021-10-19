
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './Pages/Homes/About/About';
import Doctors from './Pages/Homes/Doctors/Doctors';
import Footer from './Pages/Homes/Footer/Footer';
import Header from './Pages/Homes/Header/Header';
import Home from './Pages/Homes/Home/Home';
import Homes from './Pages/Homes/Homes/Homes';
import Login from './Pages/Homes/Login/Login';
import Notfound from './Pages/Homes/Notfound/Notfound';
import Register from './Pages/Homes/Register/Register';
import Services from './Pages/Homes/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Homes></Homes>
          </Route>
          <Route path="/homes">
            <Homes></Homes>
          </Route>
         
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
          <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/Register'>
            <Register></Register>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
