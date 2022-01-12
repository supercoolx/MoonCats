import React, { Component } from 'react'
import NFTUnit from './NFTUnit'
import './Page.css'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                {/* title */}
                <h1>Simple NFT Marketplace</h1>

                {/* market grid */}
                <div className="grid-container">
                    <NFTUnit />
                    <NFTUnit />
                    <NFTUnit />
                    <NFTUnit />
                    <NFTUnit />
                    <NFTUnit />
                </div>
            </div>
        )
    }
}
