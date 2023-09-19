/**
 * Assert a link
 * @param {HTMLElement} Link element to assert
 * @param {String} Expected "href" attribute
 * @param {String} Expected copy
 * @param {Boolean} Flag for checking 'rel' attribute
 * @param {Boolean} Flag for checking 'target' attribute
 */
export const assertLink = ({
  element,
  expectedHref,
  expectedCopy,
  assertRel = false,
  assertTargetBlank = false
}) => {
  expect(element).toHaveAttribute('href', expectedHref);

  if (assertRel) {
    expect(element).toHaveAttribute('rel', 'noopener noreferrer');
  }

  if (assertTargetBlank) {
    expect(element).toHaveAttribute('target', '_blank');
  }

  if (expectedCopy) {
    expect(element).toHaveTextContent(expectedCopy);
  } else {
    expect(element).toHaveTextContent(expectedHref);
  }
};

/**
 * Assert list items length
 * @param {HTMLElement} React testing library container
 * @param {Integer} Expected amount of list items
 */
export const assertListItems = ({ container, expectedLength }) => {
  const listItems = container.getElementsByTagName('li');

  expect(listItems.length).toEqual(expectedLength);
};

/**
 * Assert no list items length
 * @param {HTMLElement} React testing library container
 */
export const assertNoListItems = (container) => {
  const listItems = container.getElementsByTagName('li');

  expect(listItems.length).toEqual(0);
};
