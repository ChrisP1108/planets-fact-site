import { BrowserRouter, Switch, Route, Redirect } from'react-router-dom';
import Header from './components/Header/Header.js';
import Page from './components/Page/Page.js';
import './App.css';
import { MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE } from './Content'

const App = () => {

  return (
    <BrowserRouter>
      <div className="main-background">
        <Header />
          <Switch>
            <Route exact path='/mercury'><Page content={MERCURY[0]}/></Route>
            <Route exact path='/venus'><Page content={VENUS[0]}/></Route>
            <Route exact path='/earth'><Page content={EARTH[0]}/></Route>
            <Route exact path='/mars'><Page content={MARS[0]}/></Route>
            <Route exact path='/jupiter'><Page content={JUPITER[0]}/></Route>
            <Route exact path='/saturn'><Page content={SATURN[0]}/></Route>
            <Route exact path='/uranus'><Page content={URANUS[0]}/></Route>
            <Route exact path='/neptune'><Page content={NEPTUNE[0]}/></Route>
            <Redirect to='/mercury' />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
