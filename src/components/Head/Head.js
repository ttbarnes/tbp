import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { URL } from '@/constants';
import { METADATA, NAME } from '@/content-strings';

const { DESCRIPTION, KEYWORDS } = METADATA;

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

      <meta
        name='description'
        content={DESCRIPTION}
      />
      <meta
        name='author'
        content={NAME}
      />
      <meta
        name='keywords'
        content={KEYWORDS}
      />

      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:title'
        content={title}
      />
      <meta
        property='og:description'
        content={DESCRIPTION}
      />
      <meta
        property='og:url'
        content={URL}
      />
      <meta
        property='og:image'
        content='/og-image.jpg'
      />

      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        property='twitter:domain'
        content={URL}
      />
      <meta
        property='twitter:url'
        content={URL}
      />
      <meta
        name='twitter:title'
        content={title}
      />
      <meta
        name='twitter:description'
        content={DESCRIPTION}
      />
      <meta
        name='twitter:image'
        content='/og-image.jpg'
      />

      <link
        rel='icon'
        href='/favicon.ico'
      />
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
