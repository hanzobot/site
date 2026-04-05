import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Giveaway — Win $50,000 in AI Credits',
  description:
    'Enter for a chance to win up to $50,000 in Hanzo Cloud AI credits. Submit your email and earn bonus entries by following Hanzo on GitHub and LinkedIn.',
};

export default function GiveawayPage() {
  redirect('/');
}
