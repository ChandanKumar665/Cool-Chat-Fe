import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoutedContent } from './Components/Route/RoutedContent'
import store from './store'
import './Styles/App.scss'

function App () {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <RoutedContent />
        </Router>
      </Provider>
    </div>
  )
}

export default App
