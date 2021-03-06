import { css } from '@emotion/css';
import color from '~/styles/color';

export const sForm = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
`;

export const sTitleForm = css`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 20px 0;
  text-align: center;
`;

export const sErrorLabel = css`
  font-size: 1rem;
  color: ${color.red};
`;
