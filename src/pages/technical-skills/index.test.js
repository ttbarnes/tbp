import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechnicalSkillsPage from '.';
import { TECHNICAL_SKILLS } from '@/content-strings';

describe('pages/technical-skills', () => {
  beforeEach(() => {
    render(
      <TechnicalSkillsPage />
    );
  });

  it('should render a heading', () => {
    const expectedCopy = "Tony's technical skills";

    const element = screen.getByText(expectedCopy, { selector: 'h1' });

    expect(element).toBeInTheDocument();
  });

  it('should render an intro', () => {
    const expectedCopy = 'I use the right tools for the job.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render a sidebar component', () => {
    const expectedCopy = "Categories of Tony's technical skills";

    const element = screen.getByLabelText(expectedCopy, { selector: 'ul' });

    expect(element).toBeInTheDocument();
  });

  it('should render `technical skills` component', () => {
    const firstGroup = TECHNICAL_SKILLS.GROUPS.BUILD_TOOLS;

    const expectedCopy = `Tony's ${firstGroup.TITLE} technical skills`;

    const element = screen.getByLabelText(expectedCopy, { selector: 'ul' });

    expect(element).toBeInTheDocument();
  });
});
