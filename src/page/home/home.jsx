import React, { Component } from 'react'
import { Container,  Row, Col } from 'react-bootstrap';
import './home.css'

export default class home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home-header'>
                    <div className='logofont'>
                        
                    </div>
                    <div className='signout'>
                        登出
                    </div>
                </div>
                <Container>
                    <h1 style ={{ marginTop : 26}}>H 棟</h1>
                    <Row>
                        <Col className="home-content">
                            <div className="home-content-header">第一床</div>
                            <div className="home-content-footer">
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        心跳
                                    </div>
                                    <div className="footer-content-big">
                                        55 bpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        呼吸
                                    </div>
                                    <div className="footer-content-big">
                                        11 rpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        體溫
                                    </div>
                                    <div className="footer-content-big">
                                        36.8 度
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="home-content">
                            <div className="home-content-header">第二床</div>
                            <div className="home-content-footer">
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        心跳
                                    </div>
                                    <div className="footer-content-big">
                                        55 bpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        呼吸
                                    </div>
                                    <div className="footer-content-big">
                                        11 rpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        體溫
                                    </div>
                                    <div className="footer-content-big">
                                        36.8 度
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="home-content">
                            <div className="home-content-header">第三床</div>
                            <div className="home-content-footer">
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        心跳
                                    </div>
                                    <div className="footer-content-big">
                                        55 bpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        呼吸
                                    </div>
                                    <div className="footer-content-big">
                                        11 rpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        體溫
                                    </div>
                                    <div className="footer-content-big">
                                        36.8 度
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="home-content">
                            <div className="home-content-header">第四床</div>
                            <div className="home-content-footer">
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        心跳
                                    </div>
                                    <div className="footer-content-big">
                                        55 bpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        呼吸
                                    </div>
                                    <div className="footer-content-big">
                                        11 rpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        體溫
                                    </div>
                                    <div className="footer-content-big">
                                        36.8 度
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style ={{ marginTop : 30}}>
                        <Col className="home-content">
                            <div className="home-content-header">第五床</div>
                            <div className="home-content-footer">
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        心跳
                                    </div>
                                    <div className="footer-content-big">
                                        55 bpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        呼吸
                                    </div>
                                    <div className="footer-content-big">
                                        11 rpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        體溫
                                    </div>
                                    <div className="footer-content-big">
                                        36.8 度
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="home-content">
                            <div className="home-content-header">第六床</div>
                            <div className="home-content-footer">
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        心跳
                                    </div>
                                    <div className="footer-content-big">
                                        55 bpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        呼吸
                                    </div>
                                    <div className="footer-content-big">
                                        11 rpm
                                    </div>
                                </div>
                                <div className="footer-content">
                                    <div className="footer-content-small">
                                        體溫
                                    </div>
                                    <div className="footer-content-big">
                                        36.8 度
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
