import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import { CLIENTS_PROJECTS } from '@/content-strings';
import ClientsProjectsPage from '../../pages/clients-projects';

describe('pages/clients-projects', () => {
  let container;

  beforeEach(() => {
    const rendered = render(<ClientsProjectsPage />);

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a header', () => {
    const element = container.querySelector('header');

    expect(element).toBeInTheDocument();
  });

  it('should render a heading', () => {
    const expectedCopy = 'Clients, projects';

    const element = screen.getByText(expectedCopy, { selector: 'h1' });

    expect(element).toBeInTheDocument();
  });

  it('should render an intro', () => {
    const expectedCopy = 'A small preview.';

    const element = screen.getByText(expectedCopy, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });

  it('should render a sidebar component', () => {
    const expectedCopy = 'Pages';

    const element = screen.getByLabelText(expectedCopy, { selector: 'ul' });

    expect(element).toBeInTheDocument();
  });

  it('should render `industry sector` component(s)', () => {
    const [firstIndustry] = CLIENTS_PROJECTS;

    const expectedCopy = firstIndustry.heading;

    const element = screen.getByText(expectedCopy, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });
});
