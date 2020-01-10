import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Tag from 'components/Tag';
import {
  GroupRoot,
  GroupFadeInShort,
  GroupFadeIn,
  HeadingColumn,
  HeadingContent,
  Heading,
  StyledListItem,
  Border,
  GroupItems,
  ListItemContainer,
  ListItemContent,
  ProjectHeading,
  TagList,
  TagListItem,
  Copy,
  ListItemFooter,
  ProjectLink,
  StyledH4
} from './styled';

export class TreeGroup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentIsMounted = false;

  constructor() {
    super();
    this.state = {
      isLargeScreen: false
    };
  }

  componentDidMount() {
    this.componentIsMounted = true;
    this.setIsLargeScreen();
    window.addEventListener('resize', () => {
      this.setIsLargeScreen();
    });
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
    window.removeEventListener('resize', this.setIsLargeScreen());
  }

  setIsLargeScreen() {
    const { isLargeScreen } = this.state;
    if (this.componentIsMounted) {
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
  }

  handleInlineSummaryStyles(colorsObj) {
    const {
      summaryText,
      summaryOpacity,
      text
    } = colorsObj;

    const stylesObj = {};

    if (summaryText) {
      stylesObj.color = summaryText;
    } else {
      stylesObj.color = text;
    }
    if (summaryOpacity) {
      stylesObj.opacity = summaryOpacity;
    }
    return stylesObj;
  }

  renderGroup() {
    const {
      heading,
      items,
      tags,
      isLast,
      largeGroupHeight
    } = this.props;

    const renderGroupContent = (isLast && !largeGroupHeight) || !isLast;

    return (
      <div>
        <HeadingColumn>
          <HeadingContent>
            <Heading alwaysMargin={largeGroupHeight}>{heading}</Heading>
          </HeadingContent>
        </HeadingColumn>

        <ul>
          {renderGroupContent && (

            <StyledListItem
              isLast={isLast}
              largeGroupHeight={largeGroupHeight}
            >

              <Border />

              <GroupItems>
                {items && items.map((item) => (
                  <ListItemContainer
                    key={item.name}
                    className="project-card"
                  >
                    <ListItemContent
                      style={item.colors && {
                        background: item.colors.bg,
                        color: item.colors.text,
                        border: `solid 1px ${item.colors.border}`
                      }}
                    >

                      <ProjectHeading>
                        <StyledH4
                          noMargin
                          style={{ color: item.colors.text }}
                        >{item.name}
                        </StyledH4>
                      </ProjectHeading>

                      {item.summary && (
                        <Copy
                          style={this.handleInlineSummaryStyles(item.colors)}
                        >
                          {item.summary}
                        </Copy>
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
          )}
        </ul>
      </div>
    );
  }

  renderGroupContainer() {
    const { largeGroupHeight, isLast } = this.props;
    const { isLargeScreen } = this.state;

    if (largeGroupHeight) {
      if (isLargeScreen) {
        return (
          <LazyLoad height={650}>
            <GroupFadeIn isLast={isLast} largeGroupHeight={largeGroupHeight}>
              {this.renderGroup()}
            </GroupFadeIn>
          </LazyLoad>
        );
      }
      return (
        <div>
          <GroupFadeIn isLast={isLast} largeGroupHeight={largeGroupHeight}>
            {this.renderGroup()}
          </GroupFadeIn>
        </div>
      );
    }

    if (isLargeScreen) {
      return (
        <LazyLoad height={550}>
          <GroupFadeInShort isLast={isLast}>
            {this.renderGroup()}
          </GroupFadeInShort>
        </LazyLoad>
      );
    }
    return (
      <div>
        <GroupFadeInShort isLast={isLast}>
          {this.renderGroup()}
        </GroupFadeInShort>
      </div>
    );
  }

  render() {
    const { isLast, largeGroupHeight, emptyLastItem } = this.props;

    return (
      <GroupRoot
        largeGroupHeight={largeGroupHeight}
        isLast={isLast}
        emptyLastItem={emptyLastItem}
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
  largeGroupHeight: PropTypes.bool,
  emptyLastItem: PropTypes.bool
};

TreeGroup.defaultProps = {
  isLast: false,
  items: [],
  tags: [],
  largeGroupHeight: false,
  emptyLastItem: false
};

export default TreeGroup;
