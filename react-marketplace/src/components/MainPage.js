import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap'
import NFTUnit from './NFTUnit'
import './Page.css'
import Web3 from 'web3'
import axios from 'axios'
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from './ContractData'

// todo: make contract ERC721Enumerable so it can iterate all the tokens and get metadata

var NFTmetadata = []

let initWeb3 = async () => {
    console.log("connecting to web3")

    // create the web3 object
    var w3 = new Web3('ws://localhost:7545')
    console.log(w3)
    console.log(await w3.eth.getAccounts())

    // create contract instance
    var deployedContract = new w3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS)
    console.log(deployedContract)
    

    // iterate through the 3 test token minted
    for (let i = 1; i <= 3; i++) {

        // get their URI
        await deployedContract.methods.tokenURI(i)
        .call()
        .then((result) => {

            // console.log(result)
            // send axios request to the tokenURI to retrieve the metadata obj
            axios.get(`http://${result}`).then((response) => {
                // console.log(response.data)

                // push them into the global array variable so app can use it
                NFTmetadata.push(response.data)
            })
           


        })
        
    }

}


export default class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            metadatas: []
        }
    }

    async componentWillMount(){
        await initWeb3()

        // load NFT token metadata
        this.setState({
            metadatas: NFTmetadata
        })

        console.log(this.state.metadatas[0].properties.description.description)
        // console.log(this.state.metadatas[1])
        // console.log(this.state.metadatas[2])


    }

    render() {
        console.log(NFTmetadata[0])
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
                    {/* <NFTUnit render={this.state.metadatas[0]['properties']['image']['description']}/> */}
                    <NFTUnit desc={NFTmetadata[0].properties.description.description} />

                </div>
            </div>
        )
    }
}
