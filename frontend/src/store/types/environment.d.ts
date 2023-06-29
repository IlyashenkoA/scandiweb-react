export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_PUBLIC_URL: string;
    }
  }
}