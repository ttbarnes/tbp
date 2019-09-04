import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FadeInLong } from 'components/styledShared';
import Tag from 'components/Tag';
import H4 from 'components/H4';
import {
  Root,
  HeadingColumn,
  HeadingContent,
  Heading,
  SubHeading,
  StyledListItem,
  Border,
  GroupItems,
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

export class TreeGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      heading,
      subHeading,
      items,
      tags,
      isLast
    } = this.props;

    return (
      <Root>
        <LazyLoad height={420}>
          <FadeInLong>
            <HeadingColumn>
              <HeadingContent>
                <Heading>{heading}</Heading>
                {heading === 'Timeline' && <SubHeading>{subHeading}</SubHeading>}
              </HeadingContent>
            </HeadingColumn>

            <StyledListItem
              isLast={isLast}
            >
              <Border />
              <GroupItems>
                {items && items.map((item) => (
                  <ListItemContainer key={item.name}>
                    <ListItemContent>

                      <ProjectHeading>
                        <H4 noMargin>{item.name}</H4>
                      </ProjectHeading>

                      <ProjectIndustry>{item.industry}</ProjectIndustry>

                      {item.primaryTech && (
                        <PrimaryTechTag
                          type={item.primaryTech}
                          backgroundTheme
                          small
                        />
                      )}

                    </ListItemContent>

                    {item.url && (
                      <ListItemFooter>
                        <ProjectLink
                          href={item.url}
                          target="_blank"
                          rel="noopener"
                          key={item.url}
                        >
                          view
                        </ProjectLink>
                      </ListItemFooter>
                    )}

                  </ListItemContainer>
                ))}

                {(tags && tags.length) ? (
                  <TagList>
                    {tags.map((tagItem) => (
                      <TagListItem key={tagItem}>
                        <Tag
                          type={tagItem}
                          backgroundTheme
                        />
                      </TagListItem>
                    ))}
                  </TagList>
                ) : null}

              </GroupItems>
            </StyledListItem>
          </FadeInLong>
        </LazyLoad>
      </Root>
    );
  }
}

TreeGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.string),
  isLast: PropTypes.bool
};

TreeGroup.defaultProps = {
  subHeading: '',
  isLast: false,
  items: [],
  tags: []
};

export default TreeGroup;
