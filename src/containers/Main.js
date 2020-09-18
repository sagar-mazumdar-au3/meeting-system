import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.css";
import UserList from '../conponents/UserList';
import BusySlot from '../conponents/BusySlots';
import MeetingSent from '../conponents/MeetingSent';
import MeetingSentList from '../conponents/MeetingSentList'; 
import NavBar from '../conponents/Navbar';

function Main()  {
    return (
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/" >
           <UserList/>
          </Route>
          <Route  path="/meeting-sent">
            <MeetingSent />
          </Route>
          <Route  path="/my-busy-slots">
          <BusySlot/>
          </Route>
          <Route  path="/meeting-sent-list">
          <MeetingSentList/>
          </Route>
        </Switch>
      </>
    );
  }

export default Main;