import * as React from 'react';
import { Link } from 'react-router';
import * as Radium from 'radium';

const errorStyles = {
  padding: '1.5rem'
};

export const Error = () => {
  return (
    <div style={errorStyles}>
      <p>404 <br/> :`(</p>
    </div>
  );
};

export default Error;
