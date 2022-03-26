import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventDashboard/EventForm";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import "./styles.css";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar
        setFormOpen={handleCreateFormOpen}
        selectEvent={handleSelectEvent}
      />
      <Container className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/events" element={<EventDashboard />} />
          <Route path="/events/:id" element={<EventDetailedPage />} />
          <Route path="/createEvent" element={<EventForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
