import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { ChatStyled } from '../Chat/Chat.styled';

export const ChatGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  padding: 20px;
  
  ${breakpoint('md')`
    grid-template-columns: repeat(2, 1fr);
  `}
  
  ${breakpoint('xl')`
    grid-template-columns: repeat(3, 1fr);
  `}
  
  ${ChatStyled} {
    height: 75vh;
  }
`;
