import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './app/styles/variables.styled';
import { GlobalStyled } from './app/styles/global.styled';

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyled />
      <App />
    </>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
