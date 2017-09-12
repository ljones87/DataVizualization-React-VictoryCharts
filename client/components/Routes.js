
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import YPropContainer from './emissionsByYear/YPropContainer'
import SPropContainer from './emissionsByState/SPropContainer'
import Sidebar from './Sidebar'

const Routes =() => {
      return (
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/1984" component={YPropContainer} />
            <Route exact path="/1994" component={YPropContainer} />
            <Route exact path="/2004" component={YPropContainer} />
            <Route exact path="/2014" component={YPropContainer} />
            <Route exact path="/CO" component={SPropContainer} />
            <Route exact path="/WY" component={SPropContainer} />
            <Route exact path="/MT" component={SPropContainer} />
            <Route exact path="/OR" component={SPropContainer} />
            <Route exact path="/CA" component={SPropContainer} />
            <Route exact path="/NY" component={SPropContainer} />
            <Route exact path="/TX" component={SPropContainer} />
          </Switch>
        </div>
      )
}


export default Routes

