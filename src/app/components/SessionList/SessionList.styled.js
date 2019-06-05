import styled, { css } from 'styled-components';

export const SessionListStyled = styled.div(props => css`
  padding: 20px;
  display: flex;
  flex-direction: column;
`);

export const SessionListItemStyled = styled.div(props => css`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: ${props.theme.colorPrimary};
  color: ${props.theme.colorTextReversed};
  border-radius: 5px;
  
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`);
