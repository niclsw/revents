import React, { useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import "../../app/layout/styles.css";
import SingedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

const NavBar = ({ setFormOpen, selectedEvent }) => {

  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push('/');
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-Vents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to='/events' />
        {authenticated &&
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button
            positive
            inverted
            content="Create Event"
            // onClick={() => setFormOpen(true)}
            // key={selectedEvent ? selectedEvent.id : null}
          /> 
        </Menu.Item> }
        {authenticated ? <SignedInMenu handleSignOut={handleSignOut}/> : <SingedOutMenu setAuthenticated={setAuthenticated}/>}
        
        
      </Container>
    </Menu>
  );
};

export default NavBar;
