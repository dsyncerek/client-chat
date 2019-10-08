import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { SessionContextProvider } from './context/SessionContext';
import { GlobalStyled } from './styles/global.styled';
import { theme } from './styles/variables.styled';

const Root = () => (
  <SessionContextProvider>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyled />
        <App />
      </>
    </ThemeProvider>
  </SessionContextProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
