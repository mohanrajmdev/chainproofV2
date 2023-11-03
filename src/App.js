import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {Home , Upload , View , Tutorial , Profile ,Nopage , Create ,Verify, Login, Signup} from './components'
import Demo from './components/Demo';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/upload" element={<Upload />} />
          <Route path="/view" element={<View />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/create' element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/test" element={<Demo />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
