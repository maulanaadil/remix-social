import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type React from 'react';

export type Props = ComponentPropsWithoutRef<'button'> & {
  type: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
  as?: React.ElementType<any>;
};

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonType = 'submit' | 'reset' | 'button';

export type ButtonSize = 'xs' | 's' | 'm' | 'l';
