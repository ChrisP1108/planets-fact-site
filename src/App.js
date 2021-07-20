import { BrowserRouter, Switch, Route, Redirect } from'react-router-dom';
import Header from './components/Header/Header.js';
import Page from './components/Page/Page.js';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="main-background">
        <Header />
          <Switch>
            <Route exact path='/mercury'><Page /></Route>
            <Route exact path='/venus'><Page /></Route>
            <Route exact path='/earth'><Page /></Route>
            <Route exact path='/mars'><Page /></Route>
            <Route exact path='/jupiter'><Page /></Route>
            <Route exact path='/saturn'><Page /></Route>
            <Route exact path='/uranus'><Page /></Route>
            <Route exact path='/neptune'><Page /></Route>
            <Redirect to='/mercury' />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
