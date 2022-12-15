import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AllDogs from './components/AllDogs/AllDogs';
import LandinPage from './components/LandinPage/LandinPage';
import BreedCreator from './components/BreedCreator/BreedCreator';
import Footer from './components/Footer/Footer';
import DogDetail from './components/DogDetail/DogDetail';


// https://pngimage.net/wp-content/uploads/2018/05/cachorro-feliz-png-2.png

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path='/' component={LandinPage}/>
            <Route exact path='/home' component={AllDogs} />
            <Route exact path='/new-breed' component={BreedCreator} />
            <Route exact path='/Breed/:name' component={DogDetail}/>
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
