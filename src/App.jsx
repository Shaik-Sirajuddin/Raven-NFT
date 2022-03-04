import './App.css';
import Main from './screens/Main';
import { Routes, Route } from 'react-router-dom';
import Presale from './screens/Presale';
import Mint from './screens/Mint';
const App = () => {
    return (<Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/presale" element={<Presale />}/>
      <Route path="/mint" element={<Mint />}/>
    </Routes>);
};
export default App;
