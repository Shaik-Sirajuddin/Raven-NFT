import './App.css';
import Main from './screens/Main';
import { Routes, Route } from 'react-router-dom';
import Presale from './screens/Presale';
import Mint from './screens/Mint';
import Register from './screens/Register';
const App = () => {
    return (<Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/presale" element={ <Presale />}/>
      <Route path="/mint" element={ <Mint /> }/>
      <Route path='/register' element={ <Register/> }/>
    </Routes>);
};
export default App;
