import React, { Component } from 'react';
import * as d3 from 'd3';

class Path extends Component {
    
    render() {
        const { scales, data, className } = this.props;
        const { xScale, yScale } = scales;
        const line = d3.line()
                        .x(d=> xScale(d.title))
                        .y(d=> yScale(d.value))
                        //.curve(d3.curveCatmullRom.alpha(0.5)) //curve 

        const newline = line(data);
    
        return (
            <path className={className} d={newline}></path>
        )
    }
} 

export default Path;