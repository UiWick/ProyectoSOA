import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListReservaComponent from './components/ListReservaComponent';
import CreateReservaComponent from './components/CreateReservaComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateReservaComponent from './components/UpdateReservaComponent';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<ListReservaComponent/>}/>
              <Route path='/reservas' element={<ListReservaComponent/>}/>
              <Route path='/add-reserva' element={<CreateReservaComponent/>}/>
              <Route path='/update-reserva/:id' element={<UpdateReservaComponent/>}/>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
