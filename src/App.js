import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Portal from './components/Portal/Portal';
import Register from './components/Register/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/portal' element={<Portal />}>
        </Route>
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
