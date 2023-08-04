import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SoftSkillsList from './SoftSkillsList';
import { SOFT_SKILLS } from '@/content-strings';

describe('components/SoftSkillsList', () => {
  beforeEach(() => {
    render(
      <SoftSkillsList />
    );
  });

  it('should render an unordered list with aria label', () => {
    const element = screen.getByLabelText("Some of Tony's soft skills");

    expect(element).toBeInTheDocument();
  });

  it('should render a list item for each soft skills', () => {
    SOFT_SKILLS.map((skill) => {
      const element = screen.getByText(skill, { selector: 'li' });

      expect(element).toBeInTheDocument();

      const expectedClass = 'tag-list-item tag-list-item-dark';

      expect(element).toHaveAttribute('class', expectedClass);
    });
  });
});
