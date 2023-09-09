import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from './Experience';

describe('components/Experience', () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Over 14 years of experience';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `worked with` copy', () => {
    const expectedCopy =
      "Currently based in London, I've worked with many top tier companies and teams over the years, ranging from startups, agencies and SMEs to large corporations.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `always eager` copy', () => {
    const expectedCopy =
      'Always eager to help and learn, I have worked in many different industries such as financial tech, travel, ecommerce, music and many more.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `notably` copy', () => {
    const expectedCopy =
      "Notably, I have worked extensively with the UK government and also Trainline (Europe's leading train and coach app) during times of rapid expansion/growth.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `have learnt` copy', () => {
    const expectedCopy =
      "I have learnt and continue to learn a lot from these experiences, including what a team (technical or not) could, should and shouldn't do.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
