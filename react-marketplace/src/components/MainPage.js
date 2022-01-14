import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap'
import NFTUnit from './NFTUnit'
import './Page.css'
import Web3 from 'web3'

let contractAddr = '0x38B3cd90D2C0AC3573E3377910254772E1F07259'

let initWeb3 = async () => {
    console.log("connecting to web3")

    // create the web3 object
    var w3 = new Web3('ws://localhost:7545')
    console.log(w3)
    console.log(await w3.eth.getAccounts())

    // create contract instance
    var deployedContract = new w3.eth.Contract('./ABI.json', contractAddr)

    console.log(deployedContract)

}
export default class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            metadatas: [],
        }
    }

    componentDidMount(){
        initWeb3()
    }

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
