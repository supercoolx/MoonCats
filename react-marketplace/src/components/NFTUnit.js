import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'


export default class NFTUnit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            owner: props.owner,
            price: props.price
        }

    }


    render() {
        return (
            <div className="grid-item">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>NFT Title</Card.Title>
                        <Card.Text>
                            Owner: {this.state.owner}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price:</ListGroupItem>
                        <ListGroupItem>{this.state.price} ETH</ListGroupItem>
                        <ListGroupItem>{this.state.price * 3000} USD</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        <Button variant="primary">Purchase</Button>

                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
