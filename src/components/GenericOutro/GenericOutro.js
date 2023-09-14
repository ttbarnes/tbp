import PropTypes from 'prop-types';
import TextSection from '@/components/TextSection';
import BuildTogether from '@/components/BuildTogether';
import FindOutMore from '@/components/FindOutMore';

const GenericOutro = ({ renderTechSkillsLink, renderThoughtsLink }) => (
  <TextSection
    largePadding={false}
    backgroundColor='lightGrey'
    textColor='black'
  >
    <BuildTogether />

    <FindOutMore
      renderThoughtsLink={renderThoughtsLink}
      renderTechSkillsLink={renderTechSkillsLink}
    />
  </TextSection>
);

GenericOutro.propTypes = {
  renderTechSkillsLink: PropTypes.bool,
  renderThoughtsLink: PropTypes.bool
};

GenericOutro.defaultProps = {
  renderTechSkillsLink: false,
  renderThoughtsLink: false
};

export default GenericOutro;
