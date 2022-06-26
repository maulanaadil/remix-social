import { css } from '@emotion/css';
import color from '~/styles/color';

export const sForm = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const sErrorLabel = css`
  font-size: 1rem;
  color: ${color.red};
`;
