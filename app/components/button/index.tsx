import { cx } from '@emotion/css';
import { getStyleSize, getVariantStyle } from './helper';
import { sButton, sButtonDisabled, sButtonFullWidth } from './styles';
import type { Props } from './types';

const Button = ({
  size,
  variant,
  type,
  disabled,
  fullWidth,
  children,
  ...otherprops
}: Props) => {
  return (
    <button
      type={type}
      className={cx(sButton, getStyleSize(size), getVariantStyle(variant), {
        [sButtonDisabled]: disabled,
        [sButtonFullWidth]: fullWidth,
      })}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
