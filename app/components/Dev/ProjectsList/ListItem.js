import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import { FadeIn } from 'components/styledShared';
import Tag from 'components/Tag';
import Link from 'components/Link';
import H3 from 'components/H3';
import {
  StyledListItem,
  Border,
  ListItemContent,
  TagList,
  TagListItem
} from './styled';

export class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      name,
      date,
      industry,
      tech,
      urls
    } = this.props;

    return (
      <LazyLoad height={650}>
        <FadeIn>
          <StyledListItem>
            <Border />

            <ListItemContent>
              <H3>{name}</H3>
              <p>{date}</p>
              <h4>Industry</h4>
              <p>{industry}</p>

              <h4>Tech</h4>


              <TagList>
                {tech && tech.map((item, index) => (
                  <TagListItem key={index}>
                    <Tag type={item} />
                  </TagListItem>
                ))}
              </TagList>

              {urls && urls.map((item) =>

                <Link
                  to={item}
                  target="_blank"
                  rel="noopener"
                  key={item}
                >
                  {item.includes('github.com') ? (
                    'GitHub repo'
                  ) : (
                    'Live site'
                  )}
                </Link>
              )}
            </ListItemContent>
          </StyledListItem>
        </FadeIn>
      </LazyLoad>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  industry: PropTypes.string.isRequired,
  tech: PropTypes.array,
  urls: PropTypes.arrayOf(
    PropTypes.string
  )
};

ListItem.defaultProps = {
  date: '',
  urls: []
};

export default ListItem;
