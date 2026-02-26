import type { ReactNode } from 'react';
import { HomeLayout } from '@hanzo/docs-base-ui/layouts/home';
import { baseOptions, linkItems, logo, GithubIcon } from '@/lib/layout.shared';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={linkItems}
      nav={{
        title: (
          <div className="flex items-center gap-3">
            {logo}
            <span className="font-bold">Hanzo Bot</span>
            <a
              href="https://app.hanzo.bot"
              className="hidden md:inline-flex items-center gap-1.5 bg-white text-black hover:bg-neutral-200 rounded-full h-7 px-3.5 text-xs font-semibold transition-all duration-200 no-underline whitespace-nowrap"
            >
              Try Hanzo
            </a>
          </div>
        ),
      }}
    >
      {children}

      {/* Footer */}
      <footer className="border-t border-fd-border mt-auto py-8 px-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between text-sm text-fd-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Hanzo AI, Inc.</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hanzoai/bot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fd-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </HomeLayout>
  );
}
