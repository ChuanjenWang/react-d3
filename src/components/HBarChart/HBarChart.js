import React, { Component } from 'react';
import * as d3 from 'd3';

import data from './data';
import Axes from '../Shared/Axes/Axes';
import Bars from '../Shared/Bars/Bars';
import ResponsiveWrapper from '../Shared/ResponsiveWrapper/ResponsiveWrapper';

class HBarChart extends Component {
    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 };
        const svgDimensions = { 
            width: Math.max(this.props.wraperWidth, 300), 
            height: 500 //Math.max(this.props.wraperHeight, 300) 
        };
        const maxValue = Math.max(...data.map(d => d.value));
        
        const xScale = d3.scaleLinear()
                        .domain([0, maxValue])
                        .range([margins.left, svgDimensions.width - margins.right])

        const yScale = d3.scaleBand()
                        .padding(0.5)
                        .domain(data.map(d => d.title))
                        .range([svgDimensions.height - margins.bottom, margins.top])


        return(
            <div>
                <svg width={svgDimensions.width} height={svgDimensions.height}>
                    <Bars
                        scales={{ xScale, yScale }}
                        margins={margins}
                        data={data}
                        maxValue={maxValue}
                        svgDimensions={svgDimensions}
                        direction='horizontal'
                    />
                    <Axes
                        scales={{ xScale, yScale }}
                        margins={margins}
                        svgDimensions={svgDimensions}
                    />
                </svg>
            </div>
        )
    }
}

export default ResponsiveWrapper(HBarChart);