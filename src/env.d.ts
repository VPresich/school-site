interface ImportMetaEnv {
  readonly VITE_PROJECTID: string;
  readonly VITE_DATASET: string;
  readonly VITE_TOKEN_READ: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
