import './App.css';
import Nav from './components/nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login';
function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path="/home" element={ <h1> Home page Hai</h1>}/>
        <Route path="/events" element={<h1>this is yo events</h1>}/>
        <Route path="/blogs" element={<h1>this is yo blogs</h1>}/>
        <Route path="/bookreview" element={<h1>this is yo book review</h1>}/>
        <Route path="/login" element={<Login />}/>
      
      </Routes>
     
          
      </BrowserRouter>
    </div>
  );
}

export default App;
