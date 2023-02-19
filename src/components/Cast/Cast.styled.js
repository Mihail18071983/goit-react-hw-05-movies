import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 15px;
  column-gap: 10px;
`;

export const CastItem=styled.li`
border: 1px solid #a9a9a9;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;`


export const ActorInfoWrap = styled.div`
padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
