import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { Auth0Provider } from './services/auth0Wrapper';
import theme from './theme';
import App from './App';

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

const Root = () => (
  <Auth0Provider
    domain="project-qr.eu.auth0.com"
    client_id="LjSz01ROKlXkGhkhAixIf51NQ4Njd3BT"
    audience="https://api.menu-qr.tech"
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Auth0Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
