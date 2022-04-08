import React, { Component } from 'react'
import {Navbar, Container} from 'react-bootstrap'
import NFTUnit from './NFTUnit'
import './Page.css'
import Web3 from 'web3'
import axios from 'axios'
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from './ContractData'

// todo: make contract ERC721Enumerable so it can iterate all the tokens and get metadata


var NFTmetadata = []
var deployedContract
var w3
let initWeb3 = async () => {
    console.log("connecting to web3")

    // create the web3 object
    // w3 = new Web3('ws://localhost:7545')
    // w3 = new Web3('https://moonbase-blockscout.testnet.moonbeam.network')
    // w3 = new Web3('https://moonbeam-alpha.api.onfinality.io/rpc?apikey=08c8bd11-f7f3-4a9c-940e-7ccfc8305d7e')
    w3 = new Web3('https://rpc.api.moonbase.moonbeam.network')

    console.log(w3)
    console.log(await w3.eth.getAccounts())

    // create contract instance
    // deployedContract = new w3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS)
    // console.log(deployedContract)
    

    // iterate through the 3 test token minted
    for (let i = 1; i <= 3; i++) {

        // get their URI
        // await deployedContract.methods.tokenURI(i)
        // .call()
        // .then((result) => {

        //     // send axios request to the tokenURI to retrieve the metadata obj
        //     axios.get(`http://${result}`).then((response) => {

        //         // push them into the global array variable so app can use it
        //         NFTmetadata.push(response.data)
        //     })
        // })
    }
}


export default class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            metadatas: [],
            isLoading: true,
            owner: null
        }

    }

    componentWillMount(){
        this.LoadW3()
    }
    
    LoadW3 = async() => {
        
        // await initWeb3().then(() => {

        //     // load NFT token metadata
        //     this.setState({
        //         metadatas: NFTmetadata,
            
        //     })
            
        // })
        
        // no owner info in metadata
        // await this.getOwner(1)

        // start the render
        // this.setState({ isLoading: false })
        
        // console.log(this.state.metadatas[0].properties.description.description)
        // console.log(this.state.metadatas[1])
        // console.log(this.state.metadatas[2])
    }


    // render the page after data loaded
    Page = () => {
        return(
            <div>
                <NFTUnit
                    title={this.state.metadatas[0].properties.name.description}
                    desc={this.state.metadatas[0].properties.description.description}
                    render={this.state.metadatas[0].properties.image.description}
                    owner={this.state.owner}
                    price={1.2}
                />
            </div>
        )
    }



    // get owner of token
    getOwner = async (index) => {

        // call ownerof from contract
        await deployedContract.methods.ownerOf(index)
        .call()
        .then((result) => {
            this.setState({ owner: result })
            return result
        })
    }


    render() {
        return (
            <div>
                {/* title */}
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>NFT Marketplace</Navbar.Brand>
                    </Container>
                </Navbar>

                {/* market grid */}
                <div className="grid-container">
                    {this.state.isLoading ? null : this.Page()}

                </div>
            </div>
        )
    }
}
