import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from './Experience';

describe('components/Experience', () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Over 15 years of experience';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `worked with` copy', () => {
    const expectedCopy =
      'Currently based in London, I have worked with many top tier companies and teams - startups, agencies, SMEs and large corporations; Public and private sector.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `always eager` copy', () => {
    const expectedCopy =
      'Always eager to help, learn, understand and grow collaboratively, I have worked in many different industries such as financial tech, travel, ecommerce, music and many more.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `notably` copy', () => {
    const expectedCopy =
      "Notably, I have worked extensively with the UK government and Trainline (Europe's leading train and coach app) during times of rapid expansion and growth.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render `have learnt` copy', () => {
    const expectedCopy =
      "I have learnt and continue to learn a lot from these experiences, including what a team could, should, or shouldn't do.";

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
