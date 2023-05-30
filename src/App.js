import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
