import {
  sButtonL,
  sButtonM,
  sButtonPrimary,
  sButtonSecondary,
  sButtonXS,
} from './styles';
import type { ButtonSize, ButtonVariant } from './types';

export const getVariantStyle = (variant: ButtonVariant | undefined): string => {
  switch (variant) {
    case 'primary':
      return sButtonPrimary;

    case 'secondary':
      return sButtonSecondary;
    default:
      return sButtonPrimary;
  }
};

export const getStyleSize = (size: ButtonSize | undefined): string => {
  switch (size) {
    case 'xs':
      return sButtonXS;

    case 's':
      return sButtonM;

    case 'm':
      return sButtonM;

    case 'l':
      return sButtonL;

    default:
      return sButtonM;
  }
};
