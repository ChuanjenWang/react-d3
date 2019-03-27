import React, { Component } from 'react';

import './App.css';
import BarChart from './components/BarChart/BarChart';
import HBarChart from './components/HBarChart/HBarChart';
import LineChart from './components/LineChart/LineChart';
import AreaChart from './components/AreaChart/AreaChart';
import PieChart from './components/PieChart/PieChart';
import DonutChart from './components/DonutChart/DonutChart';

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
          <h2>React-d3 Chart Implement </h2>
          <hr/>
          <h3>Bar Chart</h3>
          <div className="Chart">
            <BarChart data={this.state.barchart.data} 
                      width={this.state.barchart.width}
                      height={this.state.barchart.height}/>
          </div>
          <hr/>
          <h3>Bar Chart (horizontal)</h3>
          <div className="Chart">
            <HBarChart />
          </div>
          <hr/>
          <h3>Line Chart</h3>
          <div className="Chart">
            <LineChart />
          </div>
          <hr/>
          <h3>Area Chart</h3>
          <div className="Chart">
            <AreaChart />
          </div>
          <hr/>
          <h3>Pie Chart</h3>
          <div className="Chart">
            <PieChart /> 
          </div>
          <hr/>
          <h3>Donut Chart</h3>
          <div className="Chart">
            <DonutChart /> 
          </div>
          <hr/>
      </div>
    );
  }
}

export default App;
