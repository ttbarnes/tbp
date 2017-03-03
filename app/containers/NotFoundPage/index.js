import React from 'react';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';

export default function NotFound() {
  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
