import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestPlaceInput from "./TestPlaceInput";
import TestMap from "./TestMap"
import { decrement, increment } from "./testReducer";

import { useState } from 'react';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const {loading} = useSelector((state) => state.async);
  const defaultProps = {
    center: {
      lat: 407128,
      lng: 740060
    },
    zoom: 11
  };


  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({...location, center:{lat: latLng.lat, lng: latLng.lng}})
  }

  return (
    <>
      <h1>Testing 123</h1>
      <h3>the data is: {data} </h3>

      <Button
        loading={loading}
        onClick={() => dispatch(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        loading={loading}
        onClick={() => dispatch(decrement(10))}
        content="Decrement"
        color="red"
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="Open Modal"
        color="teal"
      />

      <div style={{marginTop: 15}}>
        <TestPlaceInput setLocation={handleSetLocation}/>
        <TestMap location={location}/>
      </div>
    </>
  );
}
