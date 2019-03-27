import React, { Component } from 'react';

import data from './data';
import Pie from '../Shared/Pie/Pie';
import ResponsiveWrapper from '../Shared/ResponsiveWrapper/ResponsiveWrapper';

class DonutChart extends Component {

    render() {
        const svgDimensions = { 
            width: Math.max(this.props.wraperWidth, 300), 
            height: 500 //Math.max(this.props.wraperHeight, 300) 
        };
        const minViewportSize = Math.min(svgDimensions.width, svgDimensions.height);
        const radius = (minViewportSize / 2) * 0.9;
        const x = svgDimensions.width / 2;
        const y = svgDimensions.height / 2;

        return (
            <div>
                 <svg width={svgDimensions.width} height={svgDimensions.height}>
                    <Pie x={x} 
                         y={y} 
                         radius={radius} 
                         data={data} 
                         type="donut"
                         innerRadius={radius * .35}
                         cornerRadius={7}
                         padAngle={.02} />
                 </svg>
            </div>
        );
    }
}

export default ResponsiveWrapper(DonutChart);