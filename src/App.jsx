import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/Action'

function App() {

  const data = useSelector((state) => state.data)
  const dispatch = useDispatch()

  return (
    <div>
    {
      data.map((el, i) => (
        <div key={i} style={{borderBottom : "1px solid gray"}}>
        <h2>{el.name}</h2>
        <p>{el.email}</p>
        </div>
      ))
    }
      <button onClick={() => dispatch(getData())}>FETCH DATA</button>
    </div>
  )
}

export default App