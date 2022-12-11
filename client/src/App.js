import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AllDogs from './components/AllDogs/AllDogs';
import LandinPage from './components/LandinPage/LandinPage';
import BreedCreator from './components/BreedCreator/BreedCreator';




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path='/' component={LandinPage}/>
            <Route exact path='/home' component={AllDogs} />
            <Route exact path='/new-breed' component={BreedCreator} />     
          </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;

// <Route exact patch y component ={componente}>