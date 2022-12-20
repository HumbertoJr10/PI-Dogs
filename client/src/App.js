import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AllDogs from './components/AllDogs/AllDogs';
import LandinPage from './components/LandinPage/LandinPage';
import BreedCreator from './components/BreedCreator/BreedCreator';
import Footer from './components/Footer/Footer';
import DogDetail from './components/DogDetail/DogDetail';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllUsers} from './redux/action/action'


// https://pngimage.net/wp-content/uploads/2018/05/cachorro-feliz-png-2.png

function App() {
  const userLoged = useSelector(state => state.userLoged)
  const dispatch = useDispatch()


  useEffect( ()=> {
    dispatch(getAllUsers())
  }, [] )


  return (
    <BrowserRouter>
      <div className="App">
        {
          userLoged.length? <Nav/>:null
        }
          <Switch>
            <Route exact path='/' component={LandinPage}/>
            <Route exact path='/home' component={AllDogs} />
            <Route exact path='/new-breed' component={BreedCreator} />
            <Route exact path='/Breed/:id' component={DogDetail}/>
          </Switch>
         <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
