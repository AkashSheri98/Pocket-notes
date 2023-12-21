
import './App.css'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import DesktopNotes from './Pages/Desktop/DesktopNotes'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DesktopNotes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
