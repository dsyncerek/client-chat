import styled from 'styled-components';
import { ChatStyled } from '../Chat/Chat.styled';

export const ChatGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  
  ${ChatStyled} {
    height: 75vh;
  }
`;
