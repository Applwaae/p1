/// <reference types="vite/client" />
/// <reference types="vue/ref-transform" />
/// <reference types="@vue/runtime-core/global" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
