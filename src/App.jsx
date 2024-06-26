import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './styles/components/app.sass'

const App = () => {
    
  return (
    <div id="portfolio">
      <h1>Vinícius Amaral</h1>
      <Sidebar />
      <MainContent />
    </div>
  )

}

export default App
