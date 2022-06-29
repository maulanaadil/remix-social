import { css } from '@emotion/css';

import { UserForm } from '~/components';

const sHomeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignIn = () => {
  return (
    <div className={sHomeContainer}>
      <h2
        className={css`
          font-size: 1.5rem;
          font-weight: 400;
          margin: 20px 0;
        `}
      >
        Sign In
      </h2>
      <UserForm />
    </div>
  );
};

export default SignIn;
