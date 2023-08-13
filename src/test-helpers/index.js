// TODO:
// - object structure
// - assertTargetBlank for social icons.

export const assertLink = (
  element,
  expectedHref,
  expectedCopy,
  assertRelAttributes
) => {
  expect(element).toHaveAttribute('href', expectedHref);

  if (assertRelAttributes) {
    expect(element).toHaveAttribute('rel', 'noopener noreferrer');
  }

  if (expectedCopy) {
    expect(element).toHaveTextContent(expectedCopy);
  } else {
    expect(element).toHaveTextContent(expectedHref);
  }
};
