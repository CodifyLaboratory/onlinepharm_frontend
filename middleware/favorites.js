import {getFavoritesProducts} from "../api";

export const allFavoritesMiddleware = async () => {
    try {
        return await getFavoritesProducts()
    } catch (e) {
        throw new Error(e)
    }
}
