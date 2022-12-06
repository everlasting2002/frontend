export const SERVER_DOMAIN = import.meta.env.VITE_BACKEND_DOMAIN ? import.meta.env.VITE_BACKEND_DOMAIN : (import.meta.env.DEV ? "localhost" : "genshin.kernelbin.cn:8081");

export const WS_PATH = "ws://" + SERVER_DOMAIN + "/api";
