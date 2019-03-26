import React, { Component } from 'react';
import * as d3 from 'd3';

import './AreaChart.css';
import data from './data';
import Axes from '../Shared/Axes/Axes';
import Path from '../Shared/Path/Path';
import ResponseWraper from '../Shared/ResponsiveWrapper/ResponsiveWrapper';

class AreaChart extends Component {
    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 };
        const svgDimensions = { 
            width: Math.max(this.props.wraperWidth, 300), 
            height: 500 //Math.max(this.props.wraperHeight, 300) 
        };
        const maxValue = Math.max(...data.map(d => d.value));
        
        // scaleBand type
        const xScale = d3.scaleBand()
        .paddingInner(1)
        .domain(data.map(d => d.title))
        .range([margins.left, svgDimensions.width - margins.right])        

        // scaleLinear type
        const yHeight = svgDimensions.height - margins.bottom;
        const yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([yHeight, margins.top])

        return (
            <div>
                <svg width={svgDimensions.width} height={svgDimensions.height}>
                    <Axes
                        scales={{ xScale, yScale }}
                        margins={margins}
                        svgDimensions={svgDimensions}
                    />
                    <Path className="area" 
                        type="area"
                        scales={{ xScale, yScale }}
                        margins={margins}
                        yHeight={yHeight}
                        data={data}
                    /> 
                </svg>
            </div>
        );
    };
}

export default ResponseWraper(AreaChart);