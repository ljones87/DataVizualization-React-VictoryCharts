
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropContainer from './PropContainer'
import Sidebar from './Sidebar'
import { years, states } from '../displayData'
import Home from './Home'

const Routes =() => {
  const routeData = years.concat(states)
      return (
        <div className="container">
          <Sidebar />
          <Switch>
            {years.map(year =>
            <Route
            exact path={`/${year}`}
            component={PropContainer}
            key={year} /> )
            }
            {states.map(state =>
              <Route
              exact path={`/${state}`} component={PropContainer}
              key={state} />)}
              <Route exact path='/' component={Home} />
          </Switch>
        </div>
      )
}


export default Routes

