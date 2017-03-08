import styled from 'styled-components';

export const Root = styled.article`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled.a`
  font-size: 1.6rem;
  color: #CCC;
  text-decoration: none;
  border-bottom: solid 1px #CCC;
  padding-bottom: 0.3rem;
  transition: all 0.3s ease;
  &:hover {
    color: #333;
    border-bottom: solid 1px #999;
  }
`;
