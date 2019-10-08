import styled, { css } from 'styled-components';
import { MessageStyled } from '../Message/Message.styled';

export const MessageListStyled = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    padding: 20px;

    ${MessageStyled} {
      max-width: 75%;

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  `,
);
