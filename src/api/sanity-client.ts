import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECTID,
  dataset: import.meta.env.VITE_DATASET,
  useCdn: false,
  apiVersion: '2025-12-08',
  ignoreBrowserTokenWarning: true,
  token: import.meta.env.VITE_TOKEN_READ,
});
