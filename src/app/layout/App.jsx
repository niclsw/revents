import React, { useState } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
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
  let navigate = useNavigate();

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  const routeChange = (path) => {
    navigate(path);
  }


  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage routeChange={routeChange}/> } />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar setFormOpen={handleCreateFormOpen} selectEvent={handleSelectEvent}/>
              <Container className="main">
                <Route exact path="/events" element={<EventDashboard />} />
                <Route path="/events/:id" element={<EventDetailedPage />} />
                <Route path="/createEvent" element={<EventForm />} />
              </Container>
            </>
          )}
        />
      </Routes>
    </>
  );
}

export default App;
