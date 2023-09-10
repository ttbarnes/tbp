import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { QUICK_THOUGHTS } from '@/content-strings';
import QuickThoughtsPage from '../../pages/quick-thoughts';

const {
  SOFTWARE_NOT_JUST_WRITING_CODE,
  BE_QUICK_DONT_RUSH,
  ACCESSIBLE_FROM_THE_START
} = QUICK_THOUGHTS;

describe('pages/technical-skills', () => {
  let container;

  beforeEach(() => {
    const rendered = render(<QuickThoughtsPage />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a header', () => {
    const element = container.querySelector('header');

    expect(element).toBeInTheDocument();
  });

  it('should render a heading', () => {
    const expectedCopy = "Tony's quick thoughts";

    const element = screen.getByText(expectedCopy, { selector: 'h1' });

    expect(element).toBeInTheDocument();
  });

  it('should render an intro', () => {
    const expectedCopy = 'Knowledge sharing is invaluable.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render a sidebar component', () => {
    const expectedCopy = 'Pages';

    const element = screen.getByLabelText(expectedCopy, { selector: 'ul' });

    expect(element).toBeInTheDocument();
  });

  it('should render `SOFTWARE_NOT_JUST_WRITING_CODE` QuickThought component', () => {
    const expectedCopy = SOFTWARE_NOT_JUST_WRITING_CODE.HEADING;

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `BE_QUICK_DONT_RUSH` QuickThought component', () => {
    const expectedCopy = BE_QUICK_DONT_RUSH.HEADING;

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `ACCESSIBLE_FROM_THE_START` QuickThought component', () => {
    const expectedCopy = ACCESSIBLE_FROM_THE_START.HEADING;

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });
});
