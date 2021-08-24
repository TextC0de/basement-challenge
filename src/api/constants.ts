export const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://textcode.me/basement/api"
        : "http://localhost:3000/api";

export const QUERY_PRODUCTS = `${API_URL}/products`;
