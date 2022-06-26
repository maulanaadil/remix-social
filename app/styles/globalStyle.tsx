import { Global, css } from '@emotion/react';

const styles = css`
  * {
    font-family: 'Poppins', sans-serif;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
