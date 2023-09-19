import PropTypes from 'prop-types';
import isPopulatedArray from '@/helpers/is-populated-array';
import { NAME } from '@/content-strings';
import ListItem from './ListItem';

const RecommendationsList = ({ recommendations }) => {
  if (isPopulatedArray(recommendations)) {
    return (
      <ul aria-label={`Endorsements for ${NAME}`}>
        {recommendations.map((recommendation) => (
          <ListItem
            key={recommendation.author}
            authorText={recommendation.authorText}
            author={recommendation.author}
            role={recommendation.role}
          />
        ))}
      </ul>
    );
  }

  return null;
};

RecommendationsList.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      role: PropTypes.string,
      text: PropTypes.string
    }).isRequired
  ).isRequired
};

export default RecommendationsList;
