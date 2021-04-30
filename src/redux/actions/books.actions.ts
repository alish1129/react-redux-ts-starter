import { FETCH_BOOK } from "./index.";

export const fetchBooks = (query: any) => ({
    type: FETCH_BOOK,
    payload: {
        data: query
    }
});