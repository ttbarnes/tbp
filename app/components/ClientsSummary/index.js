import React from 'react';
import PropTypes from 'prop-types';
import {
  ListRoot,
  ListItem,
  ListItemInner,
  ListItemCopy
} from './styled';

const ClientsSummary = ({ clients }) => (
  <ListRoot>
    {clients.map((p) => (
      <ListItem key={p.name}>
        <ListItemInner
          style={{
            background: p.colors.bg,
            color: p.colors.text,
            border: `solid 1px ${p.colors.border}`
          }}
        >
          <ListItemCopy>{p.name}</ListItemCopy>
        </ListItemInner>
      </ListItem>
    ))}
  </ListRoot>
);

ClientsSummary.propTypes = {
  clients: PropTypes.array.isRequired
};

export default ClientsSummary;
