import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <RoutesApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
