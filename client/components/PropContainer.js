import React from 'react';
import { connect } from 'react-redux';
import { fetchStateData } from '../store';
import YearChartFormattingContainer from './YearChartFormattingContainer';
import StateChartFormattingContainer from './StateChartFormattingContainer';

class PropsRetriever extends React.Component {

  componentDidMount() {
    this.props.fetchDataThunk();
  }

    render () {
      const states = this.props.stateData;
      const pathInfo = this.props.match.path.slice(1);

      if (states.length) {
        return pathInfo.length > 2 ?
          (<div className="chartArea">
            <YearChartFormattingContainer states={states} year={pathInfo} />
          </div>)
        : (<div className="chartArea">
           <StateChartFormattingContainer states={states} targetState={pathInfo} />
           </div>);
    } else {
      return <h1>Loading</h1>;
    }
    }
  }

  const mapState = (state) => {
    return {
     stateData: state.stateData
    };
  };

  const mapDispatch = (dispatch) => {
    return {
      fetchDataThunk() {
        dispatch(fetchStateData());
      }
    };
  };


  export default connect(mapState, mapDispatch)(PropsRetriever);
