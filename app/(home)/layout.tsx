import type { ReactNode } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--header-height, 60px)' }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
