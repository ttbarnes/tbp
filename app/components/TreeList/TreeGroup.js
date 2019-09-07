import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import {
  FadeIn,
  FadeInLong
} from 'components/styledShared';
import Tag from 'components/Tag';
import H4 from 'components/H4';
import {
  GroupRoot,
  HeadingColumn,
  HeadingContent,
  Heading,
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
  constructor() {
    super();
    this.state = {
      isLargeScreen: false
    };
  }

  componentDidMount() {
    this.setIsLargeScreen();
    window.addEventListener('resize', () => {
      this.setIsLargeScreen();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setIsLargeScreen);
  }

  setIsLargeScreen() {
    const { isLargeScreen } = this.state;
    if (window.matchMedia('(min-width: 990px)').matches) {
      this.setState({
        isLargeScreen: true
      });
    } else if (isLargeScreen) {
      this.setState({
        isLargeScreen: false
      });
    }
  }

  renderGroup() {
    const {
      heading,
      items,
      tags,
      isLast,
      largeGroupHeight
    } = this.props;

    return (
      <div>
        <HeadingColumn>
          <HeadingContent>
            <Heading alwaysMargin={largeGroupHeight}>{heading}</Heading>
          </HeadingContent>
        </HeadingColumn>

        <ul>
          <StyledListItem
            isLast={isLast}
            largeGroupHeight={largeGroupHeight}
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
        </ul>
      </div>
    );
  }

  renderGroupContainer() {
    const { largeGroupHeight } = this.props;
    const { isLargeScreen } = this.state;

    if (largeGroupHeight) {
      if (isLargeScreen) {
        return (
          <LazyLoad height={650}>
            <FadeInLong>
              {this.renderGroup()}
            </FadeInLong>
          </LazyLoad>
        );
      }
      return (
        <div>
          <FadeInLong>
            {this.renderGroup()}
          </FadeInLong>
        </div>
      );
    }

    if (isLargeScreen) {
      return (
        <LazyLoad height={550}>
          <FadeIn>
            {this.renderGroup()}
          </FadeIn>
        </LazyLoad>
      );
    }
    return (
      <div>
        <FadeIn>
          {this.renderGroup()}
        </FadeIn>
      </div>
    );
  }

  render() {
    const { largeGroupHeight, isLast } = this.props;

    return (
      <GroupRoot
        largeGroupHeight={largeGroupHeight}
        isLast={isLast}
      >
        {this.renderGroupContainer()}
      </GroupRoot>
    );
  }
}

TreeGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.string),
  isLast: PropTypes.bool,
  largeGroupHeight: PropTypes.bool
};

TreeGroup.defaultProps = {
  isLast: false,
  items: [],
  tags: [],
  largeGroupHeight: false
};

export default TreeGroup;
