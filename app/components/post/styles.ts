import { css } from '@emotion/css';

const gray900 = 'rgb(17 24 39)';

export const sPostContainer = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #d2d3d2;
  border-radius: 0.25rem;
  max-width: 28rem;
`;

export const sPostTitle = css`
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0;
  color: ${gray900};
`;

export const sPostBody = css`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${gray900};
`;
