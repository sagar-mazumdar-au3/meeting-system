import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { busySlot } from "../redux/actions";
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

function BusySlote() {

    const dates = [{ date: '14 SEP', day: 'MON' }, { date: '15 SEP', day: 'TUE' }, { date: '16 SEP', day: ' WED' }, { date: '17 SEP', day: 'THU' }, { date: '18 SEP', day: 'FRI' }, { date: '19 SEP', day: 'SAT' }, { date: '20 SEP', day: 'SUN' }, { date: '21 SEP', day: 'MON' }];
    const times = ['07:00 AM', '07:15 AM', '07:30 AM', '07:45 AM', '08:00 AM', '08:15 AM', '08:30 AM', '08:45 AM', '09:00 AM', '09:15 AM', '09:30 AM', '09:45 AM', '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM'];

    const dispatch = useDispatch();
    const myMeetings = useSelector(state => state.myMeetings, shallowEqual);
    const myBusySlots = useSelector(state => state.myBusySlots, shallowEqual);
    const [date, setDate] = useState();


    const handleCheckBoxOnChange = useCallback((checked, time) => {

        if (checked) {
            dispatch(busySlot({ date, time }, 'AddToMyBusySlots'));
        } else {
            dispatch(busySlot({ date, time }, 'RemoveFromMyBusySlots'));
        }

    }, [date, dispatch])

    return (
        <>
            <Row className='mt-3'>
                <Col>
                    <Card border="light">
                        <Card.Header>MY BUSY SLOTS</Card.Header>
                        <Card.Body>
                            <Card.Text className='text-center'>
                                {dates.map((element, index) => {
                                    return <Button key={index} className='m-2' variant="outline-secondary" onClick={() => { setDate(element) }} >{element.date}<br />{element.day}</Button>
                                })}
                                <br />
                                <br />                                {date && times.map((time, index) => {
                                    let comp = <Form.Check key={index} type="checkbox" label={time} onChange={(e) => { handleCheckBoxOnChange(e.target.checked, time) }} />


                                    myMeetings.forEach(element => {
                                        if ((element.date.date === date.date) && (element.time === time)) {
                                            comp = <Form.Check key={index} type="checkbox" readOnly checked label={time} />
                                        }
                                    });

                                    myBusySlots.forEach(element => {
                                        if ((element.date.date === date.date) && (element.time === time)) {
                                            comp = <Form.Check key={index} type="checkbox" label={time} checked onChange={(e) => { handleCheckBoxOnChange(e.target.checked, time) }} />
                                        }
                                    });

                                    return comp;

                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default BusySlote;