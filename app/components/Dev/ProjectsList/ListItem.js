import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import { FadeInLong } from 'components/styledShared';
import Tag from 'components/Tag';
import H3 from 'components/H3';
import {
  Root,
  HeadingYear,
  StyledListItem,
  Border,
  YearProjects,
  ListItemContainer,
  ListItemContent,
  TagList,
  TagListItem
} from './styled';

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      year,
      projects
    } = this.props;

    return (
      <Root>
        <LazyLoad height={650}>
          <FadeInLong>
            <HeadingYear>{year}</HeadingYear>

            <StyledListItem>
              <Border />
              <YearProjects>
                {projects && projects.map((project) =>
                  <ListItemContainer key={project.name}>
                    <ListItemContent>
                      <H3>{project.name}</H3>

                      {project.url &&
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener"
                          key={project.url}
                        >
                          view
                    </a>
                      }

                      <TagList>
                        {project.tech && project.tech.map((item, index) => (
                          <TagListItem key={index}>
                            <Tag type={item} />
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
  projects: PropTypes.arrayOf(PropTypes.object)
};

ListItem.defaultProps = {
  date: '',
  urls: []
};

export default ListItem;
