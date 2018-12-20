import React, { Component } from 'react';

export default ChartComponent => (
    class ResponsiveChart extends Component {

        state = {
            containerWidth: null,
            containerHeight: null
        }

        componentDidMount() {
            this.resizeHandler();
            window.addEventListener('resize', this.resizeHandler);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.resizeHandler);
        }

        resizeHandler = () => {
            const currentContainerWidth = this.chartContainer
                                            .getBoundingClientRect().width;
            const currentContainerHeight = this.chartContainer
                                            .getBoundingClientRect().height;
            const shouldUpdated = (this.state.containerWidth !== currentContainerWidth) ||
                                    (this.state.containerHeight !== currentContainerHeight)
            if(shouldUpdated)
            {
                this.setState({
                    containerWidth: currentContainerWidth,
                    containerHeight: currentContainerHeight
                })
            }
        }
        
        renderChart() {
            const wraperWidth = this.state.containerWidth;
            const wraperHeight = this.state.containerHeight;

            return (
                <ChartComponent {...this.props} 
                            wraperWidth={wraperWidth}
                            wraperHeight={wraperHeight}     
                            />
            )
        }
        
        render() {
            const shouldRenderChart = (this.state.containerWidth !== null) && (this.state.containerHeight !==null)  

            return(
                <div ref={(el) => { this.chartContainer = el }}>
                    {shouldRenderChart && this.renderChart()}
                </div>
            )
        }
    }
)