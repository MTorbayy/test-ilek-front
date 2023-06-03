import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Questionnaire from './Components/Questionnaire'
import MitigationQuestionnaire from './Components/MitigationQuestionnaire'

function App() {
  return(
      <Router>
          <Routes>
              <Route path='/' Component={Questionnaire}/>
              <Route path='/mitigation-questionnaire' Component={MitigationQuestionnaire}/>
          </Routes>
      </Router>
  )
}

export default App;
