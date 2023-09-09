import PropTypes from 'prop-types';
import isPopulatedArray from '@/helpers/is-populated-array';
import TextSection from '@/components/TextSection';
import TechnicalListGroupItem from '../TechnicalListGroupItem';

const TechnicalListGroup = ({ title, items }) => {
  if (isPopulatedArray(items)) {
    return (
      <TextSection
        key={title}
        largePadding={false}
        id={title}
      >
        <>
          <h2 className='h3-size'>{title}</h2>

          <ul
            className='tag-list no-margin'
            aria-label={`Tony's ${title} technical skills`}
          >
            {items.map((tech) => (
              <TechnicalListGroupItem
                key={tech.text}
                text={tech.text}
                className={tech.className}
              />
            ))}
          </ul>
        </>
      </TextSection>
    );
  }

  return null;
};

TechnicalListGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      className: PropTypes.string
    })
  ).isRequired
};

export default TechnicalListGroup;
