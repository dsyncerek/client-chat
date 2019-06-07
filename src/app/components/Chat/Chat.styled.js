import styled, { css } from 'styled-components';
import { MessageListStyled } from '../MessageList/MessageList.styled';
import { SendMessageStyled } from '../SendMessage/SendMessage.styled';

export const ChatStyled = styled.div(props => css`
  position: relative;
  height: 100vh;
  padding-bottom: 62px;
  border: 2px solid ${props.theme.colorPrimary};
  
  ${MessageListStyled} {
    position: relative;
    overflow: auto;
    height: 100%;
  }

  ${SendMessageStyled} {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`);
