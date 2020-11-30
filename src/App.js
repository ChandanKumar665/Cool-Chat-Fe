import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { RoutedContent } from './Components/Route/RoutedContent'

function App () {
  return (
    <div className='container'>
      <Router>
        <RoutedContent />
      </Router>
    </div>
  )
}

export default App
