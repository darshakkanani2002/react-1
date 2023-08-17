// import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'

import Nav from './component/Nav';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route>
          </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}


export default App;
