import React from 'react'
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage'
import DetailPage from 'pages/DetailPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/detail-film/:id" component={DetailPage} />
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
