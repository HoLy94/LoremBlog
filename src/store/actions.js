import * as actionTypes from './actionTypes';

export const setArticlesAction = articles  =>{
    return {
        type: actionTypes.SET_ARTICLES,
        payload: {
            articles,
        },
    };
};

export const setGalleryAction = items => {
    return {
        type: actionTypes.SET_GALLERY,
        payload: {
            items,
        },
    };
};

export const takeUpdateArticleAction = id => {
    return {
        type: actionTypes.TAKE_ARTICLE_TO_UPDATE,
        payload: {
            id,
        },
    };
};

export const cancelArticleUpdateAction = () => {
    return {
        type: actionTypes.CANCEL_ARTICLE_UPDATE,
        payload: {},
    };
};

export const newArticleAction = () => {
    return {
        type: actionTypes.NEW_ARTICLE,
        payload: {},
    };
};

export const createArticleAction = article => {
    return {
        type: actionTypes.CREATE_ARTICLE,
        payload: {
            article,
        },
    };
};

export const cancelArticleCreateAction = () => {
    return {
        type: actionTypes.CANCEL_ARTICLE_CREATE,
        payload: {},
    };
};

export const updateArticleAction = article => {
    return {
        type: actionTypes.UPDATE_ARTICLE,
        payload: {
            article,
        },
    };
};

export const deleteArticleAction = id => {
    return {
        type: actionTypes.DELETE_ARTICLE,
        payload: {
            id,
        },
    };
};

//Popular\new articles
export const setPopularArticlesAction = articles => {
    return {
        type: actionTypes.SET_POPULAR_ARTICLES,
        payload: {
            articles,
        },
    };
};

export const setNewArticlesAction = articles => {
    return {
        type: actionTypes.SET_NEW_ARTICLES,
        payload: {
            articles,
        },
    };
};

//Pagination\limit
export const nextPageAction = () => {
    return {
        type: actionTypes.NEXT_PAGE,
        payload: {},
    };
};

export const prevPageAction = () => {
    return {
        type: actionTypes.PREV_PAGE,
        payload: {},
    };
};

export const currentPageAction = page => {
    return {
        type: actionTypes.CURRENT_PAGE,
        payload: {
            page,
        },
    };
};

export const changeLimitAction = limit =>{
    return {
        type: actionTypes.CHANGE_LIMIT,
        payload: {
            limit,
        },
    };
};

//Filter\sort
export const categoryFilterAction = category => {
    return {
        type: actionTypes.CATEGORY_FILTER,
        payload: {
            category,
        },
    }
};

export const cancelCategoryFilterAction = () => {
    return {
        type: actionTypes.CANCEL_CATEGORY_FILTER,
        payload: {},
    }
};

export const sortByViewsAction = () => {
    return {
        type: actionTypes.SOR_BY_VIEWS,
        payload: {},
    }
};

export const sortByDateAction = () => {
    return {
        type: actionTypes.SOR_BY_DATE,
        payload: {},
    }
};