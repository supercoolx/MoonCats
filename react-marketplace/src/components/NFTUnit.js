import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'


export default class NFTUnit extends Component {
    render() {
        return (
            <div className="grid-item">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>NFT Title</Card.Title>
                        <Card.Text>
                            Description
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price:</ListGroupItem>
                        <ListGroupItem>1.5 ETH</ListGroupItem>
                        <ListGroupItem>4650 USD</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        <Button variant="primary">Purchase</Button>

                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
