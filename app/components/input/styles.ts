import { css } from '@emotion/css';

import color from '~/styles/color';

export const sInputContainer = css`
  display: flex;
  flex-direction: column;
`;

export const sLabel = css`
  margin-bottom: 0.5rem;
  color: ${color.gray.gray1};
  font-weight: 500;
`;

export const sInput = css`
  padding: 1rem;
  background: ${color.white};
  border: transparent;
  border-radius: 5px;
  font-family: 'Poppins', Courier, monospace;
  font-weight: 500;
  font-size: 1rem;

  &:focus {
    outline: none !important;
    border: 1px solid ${color.gray.gray1};
  }
`;
