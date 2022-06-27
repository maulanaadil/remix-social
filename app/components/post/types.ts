import type { ComponentPropsWithoutRef } from 'react';

export type Props = ComponentPropsWithoutRef<'div'> & {
  header: string;
  body?: string;
  authorName?: string | null;
};
