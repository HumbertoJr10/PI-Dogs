import './App.css';
import AllDogs from './components/AllDogs';
import { useDispatch, useSelector } from "react-redux"
import { getDogs } from './redux/action/action';


function App() {

  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dog)

  function mostrar () {
    dispatch(getDogs())
    console.log(dogs)
  }

  return (
    <div className="App">
      <button onClick={ mostrar }>MOSTRAR</button>
      <AllDogs/>
    </div>
  );
}
export default App;
