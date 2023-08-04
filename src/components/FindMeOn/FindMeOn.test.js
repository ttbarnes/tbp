import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FindMeOn from './FindMeOn';
import { SOCIAL_MEDIA } from '@/constants';
import { assertLink } from '@/test-helpers'

const { GITHUB, LINKEDIN, TWITTER, INSTAGRAM } = SOCIAL_MEDIA;

describe('components/FindMeOn', () => {
  beforeEach(() => {
    render(
      <FindMeOn />
    );
  });

  it('should render a heading', () => {
    const expectedCopy = 'You can also find me on';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render a link to github', () => {
    const element = screen.getAllByRole('link')[0];

    assertLink(element, GITHUB);
  });

  it('should render a link to linkedin', () => {
    const element = screen.getAllByRole('link')[1];

    assertLink(element, LINKEDIN);
  });

  it('should render a link to twitter', () => {
    const element = screen.getAllByRole('link')[2];

    assertLink(element, TWITTER);
  });

  it('should render a link to instagram', () => {
    const element = screen.getAllByRole('link')[3];

    assertLink(element, INSTAGRAM);
  });
});
