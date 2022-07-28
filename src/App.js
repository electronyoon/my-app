import Nav from 'react-bootstrap/Nav';
import React, { Component, useState } from 'react';
import SearchBar from './components/SearchBar';
import DashBoard from './components/DashBoard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function TabScreen(props) {
  const eventKey = props.eventKey;
  if (eventKey == "2") {
    return <SearchBar />;
  } else {
    return <DashBoard />;
  }
}

function App() {
  const [eventKey, setEventKey] = useState("1");
  const handleSelect = (eventKey) => setEventKey(eventKey);

  return (
    <>
      <Nav variant="tabs" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1">DashBoard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">SearchBar</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <TabScreen eventKey={eventKey} />
      </div>
    </>
  );
}

export default App;