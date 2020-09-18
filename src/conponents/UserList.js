import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';

const userList = [
    {
        "name": "Manoj",
        "designation": "Developer"
    },
    {
        "name": "Nirav",
        "designation": "Tech Lead"
    },
    {
        "name": "Namdev",
        "designation": "Frontend Developer"
    },
    {
        "name": "Vishal",
        "designation": "Sales Head"
    },
    {
        "name": "Mayank",
        "designation": "CTO"
    },
]


function UserList() {

    return (
        <>
            <Row className='mt-5'>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="dark" className='font-weight-bold'>User List</ListGroup.Item>
                        {userList.map((user, index) => {
                            return <ListGroup.Item key={index}>{user.name} <span className='float-right'><Link to={{
                                pathname: "/meeting-sent",
                                state: user
                            }}><Badge pill variant="danger" className='pl-2 pr-2 btn'>
                                    MEET
                          </Badge></Link></span></ListGroup.Item>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
}

export default UserList;