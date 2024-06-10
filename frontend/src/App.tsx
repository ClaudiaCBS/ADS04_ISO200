import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Rotas } from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
      <Rotas></Rotas>
    </Router>
  )
}

export default App
