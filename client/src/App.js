import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { getDogs } from './redux/action/action';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AllDogs from './components/AllDogs/AllDogs';
import LandinPage from './components/LandinPage/LandinPage';




function App() {
  const dispatch = useDispatch()
  /*
  const dogs = useSelector(state => state.dog)
  
  useEffect(()=> {
    if (!dogs.length) {
      dispatch(getDogs())
    }
  }, [])
  */

  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
        <Switch>
        <Route exact path='/' component={LandinPage}/>
        <Route exact path='/home' component={AllDogs} />      
        </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;

// <Route exact patch y component ={componente}>