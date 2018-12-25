import React, { Component } from 'react';

import './Bars.css';

class Bars extends Component {

    state = {
        fillIndex: null
    }

    mouseOverHandler = (i) => {
        this.setState({fillIndex: i});
    }
    mouseOutHandler = () => {
        this.setState({fillIndex: null})
    }
    render() {
        //console.log(this.state.fillIndex);
        //console.log(this.props.direction);
        const { scales, margins, data, svgDimensions, direction } = this.props;
        const { xScale, yScale } = scales;
        const { height } = svgDimensions;
        
        const bars = (
                data.map((datum, i) => 
                <rect 
                    key={datum.title} //direction ==='vertical' ? 
                    x={ direction ==='vertical' ? xScale(datum.title) : margins.left } //xScale(datum.value)
                    y={ direction ==='vertical' ? yScale(datum.value) : yScale(datum.title)}
                    height={ direction ==='vertical' ? height - margins.bottom - scales.yScale(datum.value)
                             : yScale.bandwidth()}
                    width={ direction ==='vertical' ? xScale.bandwidth() 
                             : scales.xScale(datum.value) - margins.left  }  //width - margins.right - scales.xScale(datum.value)
                    fill={ this.state.fillIndex === i ? '#6baed6' : '#1576B6'}
                    onMouseOver={() => this.mouseOverHandler(i)}
                    onMouseOut={() => this.mouseOutHandler()}
                />
                
            )
        );
        return(
            <g>{bars}</g>
        )
    }
}

export default Bars;