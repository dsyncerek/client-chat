import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './app/App';
import { SessionContextProvider } from './app/context/SessionContext';
import { GlobalStyled } from './app/styles/global.styled';
import { theme } from './app/styles/variables.styled';

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
