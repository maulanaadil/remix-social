import { Global, css } from '@emotion/react';

const styles = css`
  * {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
