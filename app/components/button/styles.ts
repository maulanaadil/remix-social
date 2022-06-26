import { css } from '@emotion/css';

import color from '~/styles/color';

export const sButton = css`
  cursor: pointer;
  border-radius: 50px;
  transition: 0.2s all;

  color: ${color.white};
  font-weight: 600;
`;

export const sButtonFullWidth = css`
  width: 100%;
`;

export const sButtonDisabled = css`
  color: ${color.gray.gray3};
  background-color: ${color.gray.gray2};

  border: transparent;
`;

export const sButtonXS = css`
  font-size: 1rem;
  padding: 4px 16px;
`;

export const sButtonS = css`
  font-size: 0.825rem;
  padding: 8px 16px;
`;

export const sButtonM = css`
  font-size: 0.825rem;
  padding: 12px 24px;
`;

export const sButtonL = css`
  font-size: 0.825rem;
  padding: 18px 36px;
`;

export const sButtonPrimary = css`
  color: ${color.white};
  border: 1px solid ${color.blue.primary};
  background-color: ${color.blue.primary};

  &:hover {
    background-color: ${color.darkBlue.primary};
  }
`;

export const sButtonSecondary = css`
  color: ${color.white};
  border: 1px solid ${color.blue.secondary};
  background-color: ${color.blue.secondary};

  &:hover {
    background-color: ${color.darkBlue.secondary};
  }
`;
