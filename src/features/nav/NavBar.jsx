import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../../app/layout/styles.css";

const NavBar = ({ setFormOpen, selectedEvent }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-Vents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to='/events' />
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button
            positive
            inverted
            content="Create Event"
            onClick={() => setFormOpen(true)}
            key={selectedEvent ? selectedEvent.id : null}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
