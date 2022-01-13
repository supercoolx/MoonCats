import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap'
import NFTUnit from './NFTUnit'
import './Page.css'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                {/* title */}
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Simple NFT Marketplace</Navbar.Brand>
                    </Container>
                </Navbar>

                {/* market grid */}
                <div className="grid-container">
                    <NFTUnit owner="0x55CFa30E55eF0E51b95cEBe566480a54E35e299a" price={1.2}/>
                    <NFTUnit owner="0x55CFa30E55eF0E51b95cEBe566480a54E35e299a" price={1.2}/>
                    <NFTUnit owner="0x55CFa30E55eF0E51b95cEBe566480a54E35e299a" price={1.2}/>

                </div>
            </div>
        )
    }
}
