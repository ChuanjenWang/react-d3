import React, { Component } from 'react';
import * as d3 from 'd3';

import data from './data';
import Axes from '../Axes/Axes';

class BarChart extends Component {

    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 };
        const svgDimensions = { width: 600, height: 500 };
        const maxValue = Math.max(...data.map(d => d.value));
        // scaleBand type
        const xScale = d3.scaleBand()
                        .padding(0.5)
                        .domain(data.map(d => d.title))
                        .range([margins.left, svgDimensions.width - margins.right])        

        // scaleLinear type
        const yScale = d3.scaleLinear()
                        .domain([0, maxValue])
                        .range([svgDimensions.height - margins.bottom, margins.top])

        return (
            // <div id="bar"></div>
            <div>
                <svg width={svgDimensions.width} height={svgDimensions.height}>
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

export default BarChart;