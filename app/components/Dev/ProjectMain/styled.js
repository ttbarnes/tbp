import styled from 'styled-components';

const rootFlex = {
  display: 'flex',
  justifyContent: 'space-between'
};

export const RootFlex = styled.section`${rootFlex}`;

export const FlexCol = styled.div`
  width: 50%;
`;

export const ListFlex = styled.ul`${rootFlex}`;

export const ListFlexItem = styled.li`
  padding: 0 1em;
`;
