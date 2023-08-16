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
