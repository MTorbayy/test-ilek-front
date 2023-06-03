import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EnvironmentQuestionnaire from './Components/EnvironmentQuestionnaire'
import MitigationQuestionnaire from './Components/MitigationQuestionnaire'

function App() {
  return(
      <Router>
          <Routes>
              <Route path='/' Component={EnvironmentQuestionnaire}/>
              <Route path='/mitigation-questionnaire' Component={MitigationQuestionnaire}/>
          </Routes>
      </Router>
  )
}

export default App;
