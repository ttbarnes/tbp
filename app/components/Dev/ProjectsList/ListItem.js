import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import { FadeInLong } from 'components/styledShared';
import Tag from 'components/Tag';
import H4 from 'components/H4';
import {
  Root,
  HeadingYearColumn,
  HeadingYearContent,
  HeadingYear,
  HeadingYearSub,
  StyledListItem,
  Border,
  YearProjects,
  ListItemContainer,
  ListItemContent,
  ProjectHeading,
  PrimaryTechTag,
  TagList,
  TagListItem,
  ProjectIndustry,
  ListItemFooter,
  ProjectLink
} from './styled';

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      year,
      yearSub,
      projects,
      isLast
    } = this.props;

    return (
      <Root>
        <LazyLoad height={650}>
          <FadeInLong>
            <HeadingYearColumn>
              <HeadingYearContent>
                <HeadingYear>{year}</HeadingYear>
                {year === 'Currently' && <HeadingYearSub>{yearSub}</HeadingYearSub>}
              </HeadingYearContent>
            </HeadingYearColumn>

            <StyledListItem
              isLast={isLast}
            >
              <Border />
              <YearProjects>
                {projects && projects.map((project) =>
                  <ListItemContainer key={project.name}>
                    <ListItemContent>

                      <ProjectHeading>
                        <H4 noMargin>{project.name}</H4>
                      </ProjectHeading>

                      <ProjectIndustry>{project.industry}</ProjectIndustry>

                      {project.primaryTech &&
                        <PrimaryTechTag
                          type={project.primaryTech}
                          backgroundTheme
                        />
                      }

                      <TagList>
                        {project.tech && project.tech.map((item, index) => (
                          <TagListItem key={index}>
                            <Tag type={item} />{index !== project.tech.length - 1 && ', '}
                          </TagListItem>
                        ))}
                      </TagList>

                    </ListItemContent>
                    <ListItemFooter>
                      {project.url &&
                        <ProjectLink
                          href={project.url}
                          target="_blank"
                          rel="noopener"
                          key={project.url}
                        >
                          view
                        </ProjectLink>
                      }
                    </ListItemFooter>

                  </ListItemContainer>
                )}
              </YearProjects>
            </StyledListItem>
          </FadeInLong>
        </LazyLoad>
      </Root>
    );
  }
}

ListItem.propTypes = {
  year: PropTypes.string.isRequired,
  yearSub: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
  isLast: PropTypes.bool
};

ListItem.defaultProps = {
  yearSub: '',
  urls: [],
  isLast: false
};

export default ListItem;
