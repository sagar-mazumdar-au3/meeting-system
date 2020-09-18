import React, {useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { saveMeeting } from "../redux/actions";
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import TimeSlot from '../conponents/TimeSlot';

function MyBusySlots() {

    const history = useHistory();
    const person = history.location.state;

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();

    const setDateAndTime = useCallback((dateAndTimeObj) => {
        setDate(dateAndTimeObj.date);
        setTime(dateAndTimeObj.time);
    }, [])

    const handleTextAreaOnChange = useCallback((value)=>{
        setDescription(value);
    },[])

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        const meeting = {date,time,description,...person};
        dispatch(saveMeeting(meeting));

    },[date, description, dispatch, person, time]);

    return (

        <>
            { date && time ?
                <Row className='mt-5'>
                    <Col>
                        <Card border="secondary">
                            <Card.Body>
                                <Card.Title className='text-center font-weight-light'>Meet {person.name} at</Card.Title>
                                <Card.Text className='text-center text-monospace'>
                                    {time} on {date.date}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                        <div className='bg-light  p-5'>
                            <Form className='pl-4 pr-4' onSubmit={(e)=>{handleFormSubmit(e);}}>
                                <Form.Control required value={description} as="textarea" rows="2" placeholder='Describe the purpose of a meeting' onChange={(e)=>{handleTextAreaOnChange(e.target.value);}} />
                                <Button variant="success" type='submit' className='m-2 p-1 float-right'>SEND REQUEST</Button>
                            </Form>
                        </div>
                    </Col>
                </Row> : <TimeSlot setDateAndTime={(dateAndTimeObj) => { setDateAndTime(dateAndTimeObj); }} />
            }

        </>
    );
}

export default MyBusySlots;