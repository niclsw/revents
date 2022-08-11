import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../app/layout/styles.css";
import SingedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

const NavBar = ({ setFormOpen, selectedEvent }) => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-Vents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to="/events" />
        <Menu.Item name="Sandbox" as={NavLink} to="/sandbox" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button
              positive
              inverted
              content="Create Event"
              // onClick={() => setFormOpen(true)}
              // key={selectedEvent ? selectedEvent.id : null}
            />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu  />
        ) : (
          <SingedOutMenu  />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
