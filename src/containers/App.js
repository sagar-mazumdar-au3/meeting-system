import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <Container>
      <Main />
      </Container>
    </Router>
  );
}

export default App;
