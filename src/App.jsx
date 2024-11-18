import './App.css'
import {useParams} from "react-router-dom";

function App() {
  const { id } = useParams();

  return (
  <h1 className="text-center">Pokestats {id}</h1>
  )
}

export default App
