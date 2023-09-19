import PropTypes from 'prop-types';
import TextSection from '@/components/TextSection';
import BuildTogether from '@/components/BuildTogether';
import FindOutMore from '@/components/FindOutMore';

const GenericOutro = ({
  renderTechSkillsLink,
  renderThoughtsLink,
  renderClientsProjectsLink,
  renderRecommendations
}) => (
  <TextSection
    largePadding={false}
    backgroundColor='lightGrey'
    textColor='black'
  >
    <BuildTogether />

    <FindOutMore
      renderThoughtsLink={renderThoughtsLink}
      renderTechSkillsLink={renderTechSkillsLink}
      renderClientsProjectsLink={renderClientsProjectsLink}
      renderRecommendations={renderRecommendations}
    />
  </TextSection>
);

GenericOutro.propTypes = {
  renderTechSkillsLink: PropTypes.bool,
  renderThoughtsLink: PropTypes.bool,
  renderClientsProjectsLink: PropTypes.bool,
  renderRecommendations: PropTypes.bool
};

GenericOutro.defaultProps = {
  renderTechSkillsLink: false,
  renderThoughtsLink: false,
  renderClientsProjectsLink: false,
  renderRecommendations: false
};

export default GenericOutro;
