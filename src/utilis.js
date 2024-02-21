

export const getUrl = (path) => {

    return new URL(`/assets/${path}`, import.meta.url).href;
}

// base URL of are website and appending it to the path
// make it easy to import dynamically images into our codebase

