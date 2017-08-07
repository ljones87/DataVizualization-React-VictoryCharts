
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropsWrapper2 from './PropsWrapper2'
import Main from './Main'

const Routes =() => {
      return (
        <div className="container">
          <Main />
          <Switch>
            <Route exact path="/CO" component={PropsWrapper2} />
            <Route exact path="/WY" component={PropsWrapper2} />
            <Route exact path="/MT" component={PropsWrapper2} />
            <Route exact path="/OR" component={PropsWrapper2} />
            <Route exact path="/CA" component={PropsWrapper2} />
            <Route exact path="/NY" component={PropsWrapper2} />
            <Route exact path="/TX" component={PropsWrapper2} />
          </Switch>
        </div>
      )
}


export default Routes

