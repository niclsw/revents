import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SingedOutMenu({ setAuthenticated }) {

  const dispatch = useDispatch();

  return (
    <Menu.Item position="right">
      <Button
        onClick={() => dispatch(openModal({ modalType: 'LoginForm' }))}
        basic
        inverted
        content="Login"
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
