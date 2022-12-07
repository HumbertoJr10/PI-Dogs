import './App.css';
import AllDogs from './components/AllDogs/AllDogs';
import { useDispatch, useSelector } from "react-redux"
import { getDogs } from './redux/action/action';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dog)
  
  useEffect(()=> {
    if (!dogs.length) {
      dispatch(getDogs())
    }
  }, [])

  return (
    <div className="App">
      <AllDogs/>
    </div>
  );
}
export default App;

// <Route exact patch y component ={componente}>