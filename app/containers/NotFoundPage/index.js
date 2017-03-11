import React from 'react';
import { Link } from 'react-router';
import {
  ErrorMessage
} from './styled';

export default function NotFound() {
  return (
    <div>
      <ErrorMessage>Oh no, something has gone wrong :(</ErrorMessage>
      <Link to="/">Start again</Link>
    </div>
  );
}
