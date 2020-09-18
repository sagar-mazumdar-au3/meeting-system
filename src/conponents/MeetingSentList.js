import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Row, Col, ListGroup } from 'react-bootstrap';

function UserList() {

    const myMeetings = useSelector(state => state.myMeetings, shallowEqual);

    return (
        <>
            <Row className='mt-5'>
                <Col>
                    <ListGroup variant="flush">
                        <ListGroup.Item variant="light" className='font-weight-bold'>Meetings Sent List</ListGroup.Item>
                        {myMeetings.map((meeting, index) => {
                            return <div key={index} className="card border-warning mt-3 ml-4 mr-4">
                                <div className="card-header font-weight-bold">{meeting.name}<br /><span className=' text-monospace text-muted'>{meeting.designation}</span></div>
                                <div className="card-body text-warning">
                                    <h5 className="card-title">{meeting.date.day} {meeting.date.date} - {meeting.time}</h5>
                                    <p className="card-text">{meeting.description}</p>
                                </div>
                            </div>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
}

export default UserList;