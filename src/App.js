import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';

export default function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='' element={<Main />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}