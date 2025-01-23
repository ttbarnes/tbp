import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SOCIAL_MEDIA } from '@/constants';
import { assertLink } from '@/test-helpers';
import FindMeOn from './FindMeOn';

const { GITHUB, LINKEDIN, INSTAGRAM } = SOCIAL_MEDIA;

describe('components/FindMeOn', () => {
  beforeEach(() => {
    render(<FindMeOn />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'You can also find me on';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  describe('github', () => {
    it('should render a link', () => {
      const element = screen.getAllByRole('link')[0];

      assertLink({
        element,
        expectedHref: GITHUB,
        assertRel: true,
        assertTargetBlank: true
      });
    });

    it('should render an image', () => {
      const image = screen.getByAltText('GitHub icon');

      expect(image.src).toContain('/social/gh.svg');
    });
  });

  describe('linkedin', () => {
    it('should render a link', () => {
      const element = screen.getAllByRole('link')[1];

      assertLink({
        element,
        expectedHref: LINKEDIN,
        assertRel: true,
        assertTargetBlank: true
      });
    });

    it('should render an image', () => {
      const image = screen.getByAltText('LinkedIn icon');

      expect(image.src).toContain('/social/in.svg');
    });
  });

  describe('instagram', () => {
    it('should render a link', () => {
      const element = screen.getAllByRole('link')[2];

      assertLink({
        element,
        expectedHref: INSTAGRAM,
        assertRel: true,
        assertTargetBlank: true
      });
    });

    it('should render an image', () => {
      const image = screen.getByAltText('Instagram icon');

      expect(image.src).toContain('/social/ig.svg');
    });
  });
});
