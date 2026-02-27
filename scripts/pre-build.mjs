import { execSync } from 'child_process';
import fetchPricing from './fetch-pricing.mjs';

console.log('Running pre-build...');

try {
  await fetchPricing();
  execSync('node ./node_modules/@hanzo/docs-mdx/dist/bin.js', { stdio: 'inherit' });
  console.log('Pre-build complete');
} catch (error) {
  console.error('Pre-build failed:', error);
  process.exit(1);
}
