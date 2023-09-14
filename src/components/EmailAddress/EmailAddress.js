import PropTypes from 'prop-types';
import Link from 'next/link';
import { EMAIL, EMAIL_SUBJECT } from '@/constants';

const EmailAddress = ({ linkColorWhite }) => (
  <>
    My email address is{' '}
    <Link
      href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
      className={linkColorWhite ? 'white-text' : ''}
    >
      {EMAIL}
    </Link>
  </>
);

EmailAddress.propTypes = {
  linkColorWhite: PropTypes.bool
};

EmailAddress.defaultProps = {
  linkColorWhite: false
};

export default EmailAddress;
