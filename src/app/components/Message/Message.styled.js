import styled, { css } from 'styled-components';

export const MessageStyled = styled.p(props => css`
  position: relative;
  display: inline-block;
  padding: 15px;
  background: ${props.theme.colorPrimary};
  color: ${props.theme.colorTextReversed};
  border-radius: 0 5px 5px 5px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    
  }
  
  ${props.position === 'right' && css`
    align-self: flex-end;
    margin-right: 10px;
    border-radius: 5px 0 5px 5px;
    
    &::before {
      right: -9px;
      border-width: 10px 10px 0 0;
      border-color: ${props.theme.colorPrimary} transparent transparent transparent;
    }
  `}
  
  ${props.position === 'left' && css`
    align-self: flex-start;
    margin-left: 10px;
    border-radius: 0 5px 5px 5px;
    
    &::before {
      left: -9px;
      border-width: 0 10px 10px 0;
      border-color: transparent ${props.theme.colorPrimary} transparent transparent;
    }
  `}
`);
