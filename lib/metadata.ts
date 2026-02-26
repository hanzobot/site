import type { Metadata } from 'next';

export const baseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hanzo.bot',
);

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      siteName: 'Hanzo Bot',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hanzo Bot — Your AI Team in a Box' }],
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@hanikidev',
      creator: '@hanikidev',
      images: ['/og-image.png'],
      ...override.twitter,
    },
    metadataBase: baseUrl,
  };
}
