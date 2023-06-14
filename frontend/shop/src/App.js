import  Header  from "./components/Header"
import  Footer  from "./components/Footer"
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Login from './components/auth/Login';
import Reg from './components/auth/Reg';
import Profile from "./components/Profile";

function App() {
  return (
    <div className="project">
      <Header />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/catalog' Component={Catalog} />
        <Route path='/about' Component={About} />
        <Route path='/contacts' Component={Contacts} />
        <Route path='/cart' Component={Cart} />
        <Route path='/login' Component={Login} />
        <Route path='/registration' Component={Reg} />
        <Route path='/profile' Component={Profile} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
