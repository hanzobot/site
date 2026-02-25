'use client';

import { RootProvider } from '@hanzo/docs-base-ui/provider/base';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider theme={{ defaultTheme: 'dark', enableSystem: false }}>
      {children}
    </RootProvider>
  );
}
