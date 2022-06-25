import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

 

import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

ReactDom.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/survey/:questionNumber">
            <Survey />
          </Route>
          <Route>
            <Results />
          </Route>
          <Route>
            <Freelances />
          </Route>
          <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
