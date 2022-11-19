export const SERVER_DOMAIN = import.meta.env.VITE_BACKEND_DOMAIN ? import.meta.env.VITE_BACKEND_DOMAIN : "localhost";

export const WS_PATH = "ws://" + SERVER_DOMAIN + "/api";
