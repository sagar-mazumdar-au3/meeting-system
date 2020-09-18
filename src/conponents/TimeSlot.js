import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, shallowEqual} from "react-redux";
import { Row, Col, Card, Button, Alert } from 'react-bootstrap';

const dates = [{ date: '14 SEP', day: 'MON' }, { date: '15 SEP', day: 'TUE' }, { date: '16 SEP', day: ' WED' }, { date: '17 SEP', day: 'THU' }, { date: '18 SEP', day: 'FRI' }, { date: '19 SEP', day: 'SAT' }, { date: '20 SEP', day: 'SUN' }, { date: '21 SEP', day: 'MON' }];
const times = ['07:00 AM', '07:15 AM', '07:30 AM', '07:45 AM', '08:00 AM', '08:15 AM', '08:30 AM', '08:45 AM', '09:00 AM', '09:15 AM', '09:30 AM', '09:45 AM', '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM'];

function TimeSlote({ setDateAndTime }) {

    const myMeetings = useSelector(state => state.myMeetings, shallowEqual);
    const myBusySlots = useSelector(state => state.myBusySlots, shallowEqual);

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [alert, setAlert] = useState();

    const checkingChoosenTimeSlotIsFree = useCallback(() => {
        let isFree = true;
        myMeetings.forEach(element => {
            if ((element.date.date === date.date) && (element.time === time)) {
                setAlert('you have another meeting at this time, select another slot.')
                isFree = false;
                return ;
            }
        });

        if(!isFree)
        return;

        myBusySlots.forEach(element => {
            if ((element.date.date === date.date) && (element.time === time)) {
                setAlert('you already marked this slot as busy, select another slot.')
                isFree = false;
                return;
            }
        });

        if(!isFree)
        return;

        if(alert)
        setAlert(false);

        setDateAndTime({ date, time });

    }, [ date,myBusySlots, myMeetings, setDateAndTime,time,alert])

    useEffect(() => {
        if (date && time)
        checkingChoosenTimeSlotIsFree();

    }, [date, time, checkingChoosenTimeSlotIsFree]);

    return (
        <>
            <Row className='mt-5'>
                <Col>
                    <Card border="light">
                        {alert && <Alert variant='warning'>{alert}</Alert>}
                        {!date || !time ? <Card.Header> SELECT {!date && <span className='font-weight-bold'>DATE</span>} {!date && !time && 'AND'} {!time && <span className='font-weight-bold'>TIME</span>}</Card.Header> : null}
                        <Card.Body>
                            <Card.Text className='text-center'>
                                {dates.map((element, index) => {
                                    return <Button key={index} className='m-2' variant="outline-secondary" onClick={() => { setDate(element) }} >{element.date}<br />{element.day}</Button>
                                })}
                                <br/>
                                <br/>
                                {times.map((time, index) => {
                                    return <Button key={index} className='m-1' variant="outline-secondary" onClick={() => { setTime(time) }}>{time}</Button>
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default TimeSlote;