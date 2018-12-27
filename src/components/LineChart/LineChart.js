import React, { Component } from 'react';
import * as d3 from 'd3';

import './LineChart.css';
import data from './data';
import Axes from '../Shared/Axes/Axes';
import Path from '../Shared/Path/Path';
import ResponsiveWrapper from '../Shared/ResponsiveWrapper/ResponsiveWrapper';


class LineChart extends Component {

    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 };
        const svgDimensions = { 
            width: Math.max(this.props.wraperWidth, 300), 
            height: 500 //Math.max(this.props.wraperHeight, 300) 
        };
        const maxValue = Math.max(...data.map(d => d.value));
        // scaleBand type
        const xScale = d3.scaleBand()
                        .padding(1)
                        .domain(data.map(d => d.title))
                        .range([margins.left, svgDimensions.width - margins.right])        

         // scaleLinear type
        const yScale = d3.scaleLinear()
                        .domain([0, maxValue])
                        .range([svgDimensions.height - margins.bottom, margins.top])
        return (
            <div>
                <svg width={svgDimensions.width} height={svgDimensions.height}>
                    <Axes
                        scales={{ xScale, yScale }}
                        margins={margins}
                        svgDimensions={svgDimensions}
                    />
                    <Path className="line" 
                        scales={{ xScale, yScale }}
                        margins={margins}
                        data={data}
                    />
                </svg>
            </div>
        )
    }
}
export default ResponsiveWrapper(LineChart);
