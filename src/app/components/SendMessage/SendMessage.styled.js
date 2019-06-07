import styled, { css } from 'styled-components';

export const SendMessageStyled = styled.form(props => css`
  display: flex;
  background: ${props.theme.colorBgDefault};
`);

export const InputStyled = styled.input(props => css`
  flex-grow: 1;
  padding: 20px;
  border-top: 2px solid red;
`);

export const ButtonStyled = styled.button(props => css`
  padding:  20px 30px;
  background: ${props.theme.colorPrimary};
  color: ${props.theme.colorTextReversed};
`);
