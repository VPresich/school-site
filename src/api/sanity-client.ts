import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: import.meta.env.VITE_PROJECTID,
  dataset: import.meta.env.VITE_DATASET,
  useCdn: false,
  apiVersion: '2025-12-08',
  token: import.meta.env.VITE_TOKEN_READ,
});
