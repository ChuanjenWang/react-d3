import React, { Component } from 'react';
import * as d3 from 'd3';

import Slice from '../Slice/Slice';

class Pie extends Component {
    constructor(props) {
        super(props);

        this.colorScale = d3.schemeBlues[8];
        this.renderSlice = this.renderSlice.bind(this);
    }
    
    renderSlice(el, i) {
        const slice = this.props.type === "donut" ? 
                      <Slice key={el.index}
                             endAngle={el.endAngle}
                             startAngle={el.startAngle}
                             value={el.value}
                             label={el.value}
                             innerRadius={this.props.innerRadius}
                             outerRadius={150}
                             cornerRadius={this.props.cornerRadius}
                             padAngle={this.props.padAngle}
                             fill = {this.colorScale[i+1]}
                      /> :
                      <Slice key={el.index}
                             endAngle={el.endAngle}
                             startAngle={el.startAngle}
                             value={el.value}
                             label={el.value}
                             outerRadius={150}
                             fill = {this.colorScale[i+1]}
                      />;
        return slice;
    }

    render() {
        let {x, y, data} = this.props;
        let pie = d3.pie();
        
        return (
            <g transform={`translate(${x}, ${y})`}>
                {pie(data).map(this.renderSlice)}
            </g>
        );
    }
}

export default Pie;