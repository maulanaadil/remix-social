import { css } from '@emotion/css';
import color from '~/styles/color';

export const sPostContainer = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid ${color.gray.gray1};
  border-radius: 0.25rem;
  max-width: 28rem;
  margin: 10px 0;
`;

export const sPostTitle = css`
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0;
  color: ${color.black};
`;

export const sPostBody = css`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${color.black};
`;

export const sPostAuthor = css`
  margin: 0;
  font-size: 0.625rem;
  color: ${color.gray.gray1};
  font-weight: 300;
`;
