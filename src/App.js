
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './Pages/Homes/About/About';
import Doctors from './Pages/Homes/Doctors/Doctors';
import Footer from './Pages/Homes/Footer/Footer';
import Header from './Pages/Homes/Header/Header';
import Home from './Pages/Homes/Home/Home';
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
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
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
          <Route path='/register'>
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
