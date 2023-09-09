import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ROUTES } from '@/constants';
import { assertLink } from '@/test-helpers';
import FindOutMore from './FindOutMore';

describe('components/FindOutMore', () => {
  beforeEach(() => {
    render(<FindOutMore />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Find out more';

    const element = screen.getByText(expectedCopy, { selector: 'h3' });

    expect(element).toBeInTheDocument();
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText('Links to find out more about Tony');

    expect(element).toBeInTheDocument();
  });

  it('should render 2 list items', () => {
    const listItems = screen.getAllByRole('link');

    expect(listItems.length).toEqual(2);
  });

  it(`should render a link to ${ROUTES.ABOUT}`, () => {
    const element = screen.getAllByRole('link')[0];

    expect(element).toBeInTheDocument();

    assertLink({
      element,
      expectedHref: ROUTES.ABOUT,
      expectedCopy: 'About Tony'
    });
  });

  it(`should render a link to ${ROUTES.QUICK_THOUGHTS}`, () => {
    const element = screen.getAllByRole('link')[1];

    expect(element).toBeInTheDocument();

    assertLink({
      element,
      expectedHref: ROUTES.QUICK_THOUGHTS,
      expectedCopy: "Tony's quick thoughts"
    });
  });
});
