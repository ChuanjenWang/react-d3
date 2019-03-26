import React, { Component } from 'react';

import './App.css';
import BarChart from './components/BarChart/BarChart';
import HBarChart from './components/HBarChart/HBarChart';
import LineChart from './components/LineChart/LineChart';
import AreaChart from './components/AreaChart/AreaChart';

class App extends Component {
  state = {
    barchart: {
      data: [12, 5, 6, 6, 9, 19],
      width: 500,
      height: 300,
    }
  }

  render() {
    return (
      <div className="App">
          <h4>Bar Chart</h4>
          <div className="Chart">
            <BarChart data={this.state.barchart.data} 
                      width={this.state.barchart.width}
                      height={this.state.barchart.height}/>
          </div>
          
          <h4>Bar Chart (horizontal)</h4>
          <div className="Chart">
            <HBarChart />
          </div>
          
          <h4>Line Chart</h4>
          <div className="Chart">
            <LineChart />
          </div>

          <h4>Area Chart</h4>
          <div className="Chart">
            <AreaChart />
          </div>

          <h4>Pie Chart</h4>
          
          <h4>Donut Chart</h4>
          
      </div>
    );
  }
}

export default App;
