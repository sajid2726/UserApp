import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Addusers from './users/Addusers';
import Editusers from './users/EditUsers';
import ViewUsers from './users/ViewUsers';




function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/adduser' element={<Addusers/>}></Route>
    <Route exact path='/edituser/:id' element={<Editusers/>}></Route>
    <Route exact path='/viewuser/:id' element={<ViewUsers/>}></Route>
    </Routes>
    </Router> 
    </div>
  );
}

export default App;
