import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import Signup from './component/Signup';
import NotFound from './component/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
