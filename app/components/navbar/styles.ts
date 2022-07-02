import { css } from '@emotion/css';
import color from '~/styles/color';

export const sContainerNav = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${color.navColor};
  backdrop-filter: blur(10px);
  padding: 10px 10%;
  overflow: hidden;
  position: sticky;
  top: 0;

  a {
    text-decoration: none;
  }
`;

export const sLogo = css`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 20px;
  color: ${color.black};
`;

export const sListNavLinks = css`
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 20px;
    font-weight: 500;
  }

  li a {
    color: ${color.black};
    transition: all 0.3 ease;
  }

  li a:hover {
    color: ${color.blue.primary};
  }

  button a {
    color: ${color.white};
  }

  button a:hover {
    color: ${color.white};
  }
`;

export const sUserEmail = css`
  color: ${color.black};
  font-size: 1rem;
`;
