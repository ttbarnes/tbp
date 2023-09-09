export const framerMotion = () => {
  const FakeTransition = jest
    .fn()
    .mockImplementation(({ children }) => children);

  const FakeAnimatePresence = jest
    .fn()
    .mockImplementation(({ children }) => (
      <FakeTransition>{children}</FakeTransition>
    ));

  const motion = {
    li: jest.fn().mockImplementation(({ children }) => <li>{children}</li>),
    div: jest.fn().mockImplementation(({ children }) => <div>{children}</div>)
  };

  return {
    __esModule: true,
    motion,
    AnimatePresence: FakeAnimatePresence,
    default: jest.fn()
  };
};

export default framerMotion;
