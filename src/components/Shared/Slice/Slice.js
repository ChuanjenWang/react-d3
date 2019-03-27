import React, { Component } from 'react';
import * as d3 from 'd3';

class Slice extends Component {
    
    render() {
        let {value, fill, innerRadius = 0, outerRadius, startAngle, endAngle, label} = this.props;
       
        let arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(startAngle)
            .endAngle(endAngle)
            .padAngle(.01);

        return(
            <g>
                <path d={arc(value)} fill={fill} />
                <text transform={`translate(${arc.centroid(value)})`}
                      dy=".35em"
                      textAnchor="middle"
                      fill="white">
                     {label}
                </text>
            </g>
        );
    };
}

export default Slice;