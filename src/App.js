import { BrowserRouter } from'react-router-dom';
import Header from './components/Header/Header.js';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="main-background">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
