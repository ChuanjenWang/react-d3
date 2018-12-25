import React, { Component } from 'react';

import './App.css';
import BarChart from './components/BarChart/BarChart';
import HBarChart from './components/HBarChart/HBarChart';
import LineChart from './components/LineChart/LineChart';


class App extends Component {
  state = {
    barchart: {
      data: [12, 5, 6, 6, 9, 19],
      width: 500,
      height: 300,
    }
  }

  // const data = [
  //   { title: 'Terminator', value: 21, year: 1984 },
  //   { title: 'Commando', value: 81, year: 1985 },
  //   { title: 'Predator', value: 25, year: 1987 },
  //   { title: 'Raw Deal', value: 26, year: 1986 },
  //   { title: 'The Running Man', value: 11, year: 1987 },
  //   { title: 'Total Recall', value: 44, year: 1990 },
  //   { title: 'Terminator 2', value: 0, year: 1991 },
  //   { title: 'Last Action Hero', value: 22, year: 1993 },
  //   { title: 'True Lies', value: 51, year: 1994 },
  //   { title: 'Eraser', value: 29, year: 1996 },
  //   { title: 'Terminator 3', value: 2, year: 2003 },
  // ]

  render() {
    return (
      <div className="App">
          <h4>Bar Chart</h4>
          <BarChart data={this.state.barchart.data} 
                    width={this.state.barchart.width}
                    height={this.state.barchart.height}/>
          <h4>Bar Chart (horizontal)</h4>
          <HBarChart />
          <h4>Line Chart</h4>
          <LineChart />
          <h4>Donut Chart</h4>

          <h4>Gauge Chart</h4>
          
      </div>
    );
  }
}

export default App;
