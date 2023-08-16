import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { METADATA, NAME } from '@/content-strings';

const {
  DESCRIPTION, KEYWORDS
} = METADATA;

const Head = ({ pageTitle }) => {
  let title = NAME;

  if (pageTitle) {
    title = ` ${pageTitle} | ${NAME}`;
  }

  return (
    <NextHead>
      <meta
        name='viewport'
        content='height=device-height,width=device-width,initial-scale=1.0'
      />
      <title>{title}</title>

      <meta name='description' content={DESCRIPTION} />
      <meta name='author' content={NAME} />
      <meta name='keywords' content={KEYWORDS} />
    
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  );
};

Head.propTypes = {
  pageTitle: PropTypes.string
};

Head.defaultProps = {
  pageTitle: ''
};

export default Head;
