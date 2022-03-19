import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import "../../app/layout/styles.css";

const NavBar = ({ setFormOpen, selectedEvent }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-Vents
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button
            positive
            inverted
            content="Create Event"
            onClick={() => setFormOpen(true)}
            /* doesn't re-render the create new event component after props populate on the component, should be null */
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
