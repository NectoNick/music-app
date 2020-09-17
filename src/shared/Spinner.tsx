import * as React from 'react';
import BootSpinner from 'react-bootstrap/Spinner';


export function Spinner(props: { isRunning: boolean, children: any }) {
  return props.isRunning
      ? <BootSpinner animation="border" />
      : props.children;
}
