
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropContainer from './PropContainer'
import Sidebar from './Sidebar'
import { years, states } from '../displayData'
import Home from './Home'

const Routes = () => {
  const routeData = years.concat(states)
  return (
    <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/1984" component={PropContainer} />
        <Route exact path="/1994" component={PropContainer} />
        <Route exact path="/2004" component={PropContainer} />
        <Route exact path="/2014" component={PropContainer} />
        <Route exact path="/CO" component={PropContainer} />
        <Route exact path="/WY" component={PropContainer} />
        <Route exact path="/MT" component={PropContainer} />
        <Route exact path="/OR" component={PropContainer} />
        <Route exact path="/CA" component={PropContainer} />
        <Route exact path="/NY" component={PropContainer} />
        <Route exact path="/TX" component={PropContainer} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}


export default Routes

