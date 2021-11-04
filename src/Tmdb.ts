import {
    BASE_URL,
    NETFLIX_ACTION,
    NETFLIX_ORIGINALS,
    NETFLIX_DOCUMENTARY,
    NETFLIX_HORROR,
    NETFLIX_ROMANCE,
    NETFLIX_TOP,
    NETFLIX_TRENDING,
    MOVIE_BY_ID,
    SERIE_BY_ID
} from "./utils/network_address"

const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${BASE_URL}${endpoint}`);
    const json = await req.json();
    return json
}

export const getHomeList = async () => {
    return [
        {
            slug: "originals",
            title: "Originais do Netflix",
            items: await basicFetch(`${NETFLIX_ORIGINALS}`)
        },
        {
            slug: "trending",
            title: "Recomendados para Você",
            items: await basicFetch(`${NETFLIX_TRENDING}`)
        },
        {
            slug: "top rated",
            title: "Em Alta",
            items: await basicFetch(`${NETFLIX_TOP}`)
        },
        {
            slug: "action",
            title: "Ação",
            items: await basicFetch(`${NETFLIX_ACTION}`)
        },
        {
            slug: "comedy",
            title: "Comédia",
            items: await basicFetch(`${NETFLIX_ACTION}`)
        },
        {
            slug: "horror",
            title: "Terror",
            items: await basicFetch(`${NETFLIX_HORROR}`)
        },
        {
            slug: "romance",
            title: "Romance",
            items: await basicFetch(`${NETFLIX_ROMANCE}`)
        },
        {
            slug: "documentary",
            title: "Documentários",
            items: await basicFetch(`${NETFLIX_DOCUMENTARY}`)
        },
    ]
}

export const getMovieInfo = async (movieId: string, type: string) => {
    let info;

    if (movieId) {
        switch (type) {
            case "movie":
                info = await basicFetch(`${MOVIE_BY_ID(movieId)}`);
                break;
            case "tv":
                info = await basicFetch(`${SERIE_BY_ID(movieId)}`);
                break;
            default: 
                info = {};
            break;
        }
    }

    return info;
}
