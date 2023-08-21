import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBarHeading from './SideBarHeading';
import { NAME } from '@/content-strings';

describe('components/Sidebar/SideBarHeading', () => {
  let container;

  beforeEach(() => {
    const rendered = render(
      <SideBarHeading />
    );

    const { container: renderedContainer } = rendered;

    container = renderedContainer;
  });

  it('should render a heading with link', () => {
    const heading = container.querySelector('h2 a');

    expect(heading.text).toEqual(NAME);
  });
});
