import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import UserState from './context/users/UserState';

export default function App() {
  return (
    <>
    <UserState>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="The Note is deleted successfully" />
          <div className="container">
            <Routes>
              <Route exact path='' element={<Main />}></Route>
              <Route exact path='/home' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/signup' element={<SignUp />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </UserState>
    </>
  );
}