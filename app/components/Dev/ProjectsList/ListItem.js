import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import { FadeInLong } from 'components/styledShared';
import Tag from 'components/Tag';
import H3 from 'components/H3';
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
  ProjectLink,
  TagList,
  TagListItem
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
                        <H3 noMargin>{project.name}</H3>

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
                      </ProjectHeading>

                      <TagList>
                        {project.tech && project.tech.map((item, index) => (
                          <TagListItem key={index}>
                            <Tag type={item} />{index !== project.tech.length - 1 && ', '}
                          </TagListItem>
                        ))}
                      </TagList>

                    </ListItemContent>
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
