import PropTypes from 'prop-types';
import isPopulatedArray from '@/helpers/is-populated-array';
import TextSection from '@/components/TextSection';

const QuickThought = ({ content, backgroundColor, textColor }) => {
  const shouldRender = content.HEADING && isPopulatedArray(content.ITEMS);

  if (shouldRender) {
    return (
      <TextSection
        backgroundColor={backgroundColor}
        textColor={textColor}
      >
        <h2>{content.HEADING}</h2>

        {content.ITEMS.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </TextSection>
    );
  }

  return null;
};

QuickThought.propTypes = {
  content: PropTypes.shape({
    HEADING: PropTypes.string,
    ITEMS: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string
};

export default QuickThought;
