
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropsWrapper from './PropsWrapper'
import Main from './Main'

const Routes =() => {
      return (
        <div className="container">
          <Main />
          <Switch>

            <Route exact path="/1984" component={PropsWrapper} />
            <Route exact path="/1994" component={PropsWrapper} />
            <Route exact path="/2004" component={PropsWrapper} />
            <Route exact path="/2014" component={PropsWrapper} />
          </Switch>
        </div>
      )
}


export default Routes

