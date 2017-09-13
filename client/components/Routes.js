
import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import YPropContainer from './emissionsByYear/YPropContainer'
// import SPropContainer from './emissionsByState/SPropContainer'
import PropContainer from './PropContainer'
import Sidebar from './Sidebar'

const Routes =() => {
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
          </Switch>
        </div>
      )
}


export default Routes

