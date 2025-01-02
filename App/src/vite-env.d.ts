/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GET_APPOINTMENTBYDATE_API_URL?: string;
  VITE_CREATE_APPOINTMENT_API_URL?: string;
  VITE_GET_AVAILABILITY_APPOINTMENT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
