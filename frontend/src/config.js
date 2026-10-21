import { portfolio } from './data.js';

// Central runtime config. In production VITE_API_URL must be set in Vercel env vars.
export const API_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

if (!API_URL) {
  console.error('VITE_API_URL is not configured. Contact form and Synapse chat will not work.');
}

export const SOCIALS = portfolio.profile.socials;
export const GITHUB_USER = SOCIALS.github.split('/').filter(Boolean).pop();
