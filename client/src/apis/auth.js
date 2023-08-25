import request from "../utils/request";

export const me = data => request.get("/auth/me", data);
