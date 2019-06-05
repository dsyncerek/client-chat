import styled, { css } from 'styled-components';

export const SendMessageStyled = styled.div(props => css`
  display: flex;
`);

export const InputStyled = styled.input(props => css`
  flex-grow: 1;
  padding: 20px;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
`);

export const ButtonStyled = styled.button(props => css`
  padding:  20px 30px;
  background: ${props.theme.colorPrimary};
  color: ${props.theme.colorTextReversed};
`);
