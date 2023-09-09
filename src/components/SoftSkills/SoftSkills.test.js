import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SOFT_SKILLS } from '@/content-strings';
import SoftSkills from './SoftSkills';

describe('components/SoftSkills', () => {
  beforeEach(() => {
    render(<SoftSkills />);
  });

  it('should render a heading', () => {
    const expectedCopy = 'Some of my soft skills';

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render `no particular order` copy', () => {
    const expectedCopy = 'In no particular order';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render a list of soft skills', () => {
    SOFT_SKILLS.map((skill) => {
      const element = screen.getByText(skill);

      return expect(element).toBeInTheDocument();
    });
  });
});
