import React, { Component } from 'react'
import {XYPlot, LineSeries, ChartLabel, XAxis,
     YAxis, VerticalGridLines, HorizontalGridLines  } from 'react-vis';
import { Container,  Row, Col } from 'react-bootstrap';
import './info.css'

export default class info extends Component {
    render() {

        const data = [
            {x: 1, y: 75},
            {x: 2, y: 64},
            {x: 3, y: 68},
            {x: 4, y: 71},
            {x: 5, y: 63},
            {x: 6, y: 74},
            {x: 7, y: 67},
            {x: 8, y: 72},
            {x: 9, y: 70},
            {x: 10, y: 64},
            {x: 11, y: 67},
            {x: 12, y: 78},
            {x: 13, y: 76},
            {x: 14, y: 72},
            {x: 15, y: 70},
            {x: 16, y: 75},
          ];

        const Bdata = [
            {x: 1, y: 15},
            {x: 2, y: 15},
            {x: 3, y: 18},
            {x: 4, y: 16},
            {x: 5, y: 14},
            {x: 6, y: 14},
            {x: 7, y: 16},
            {x: 8, y: 16},
            {x: 9, y: 17},
            {x: 10, y: 14},
            {x: 11, y: 16},
            {x: 12, y: 18},
            {x: 13, y: 16},
            {x: 14, y: 15},
            {x: 15, y: 16},
            {x: 16, y: 15},
          ];

        return (
            <div className="info">
                <div className='home-header'>
                    <div className='logofont'>
                    </div>
                    <div className='signout'>
                        登出
                    </div>
                </div>
                <Container>
                    <div className="info-title">第一床</div>
                    <div className="info-heart">
                        <div className="info-heart-title">心跳</div>
                        <XYPlot height={200} width={900}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={data} />
                        </XYPlot>
                    </div>
                    <div className="info-breath">
                        <div className="info-breath-title">呼吸</div>
                        <XYPlot height={200} width={900}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={Bdata} />
                        </XYPlot>
                    </div>
                </Container>              
            </div>
        )
    }
}
