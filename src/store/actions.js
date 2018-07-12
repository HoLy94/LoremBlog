import * as actionTypes from './actionTypes';

export function setArticlesAction(articles) {
    return {
        type: actionTypes.SET_ARTICLES,
        payload: {
            articles,
        },
    };
}

export function setGalleryAction(items) {
    return {
        type: actionTypes.SET_GALLERY,
        payload: {
            items,
        },
    };
}

export function takeUpdateArticleAction(id) {
    return {
        type: actionTypes.TAKE_ARTICLE_TO_UPDATE,
        payload: id
    };
}

export function cancelArticleUpdateAction() {
    return {
        type: actionTypes.CANCEL_ARTICLE_UPDATE,
        payload: {}
    };
}

export function newArticleAction() {
    return {
        type: actionTypes.NEW_ARTICLE,
        payload: {}
    };
}

export function createArticleAction(article) {
    return {
        type: actionTypes.CREATE_ARTICLE,
        payload: {article}
    };
}

export function cancelArticleCreateAction() {
    return {
        type: actionTypes.CANCEL_ARTICLE_CREATE,
        payload: {}
    };
}

export function updateArticleAction(article) {
    return {
        type: actionTypes.UPDATE_ARTICLE,
        payload: {article}
    };
}

export function deleteArticleAction(id) {
    return {
        type: actionTypes.DELETE_ARTICLE,
        payload: id
    };
}
//Popular\new articles
export function setPopularArticlesAction(articles) {
    return {
        type: actionTypes.SET_POPULAR_ARTICLES,
        payload: {
            articles
        },
    };
}
export function setNewArticlesAction(articles) {
    return {
        type: actionTypes.SET_NEW_ARTICLES,
        payload: {
            articles
        },
    };
}
//Pagination\limit
export function nextPageAction() {
    return {
        type: actionTypes.NEXT_PAGE,
        payload: {}
    };
}

export function prevPageAction() {
    return {
        type: actionTypes.PREV_PAGE,
        payload: {}
    };
}

export function currentPageAction(page) {
    return {
        type: actionTypes.CURRENT_PAGE,
        payload: {page}
    };
}

export function changeLimitAction(limit) {
    return {
        type: actionTypes.CHANGE_LIMIT,
        payload: {limit}
    };
}

//Filter\sort
export function categoryFilterAction(category) {
    return {
        type: actionTypes.CATEGORY_FILTER,
        payload: {category}
    }
}
export function cancelCategoryFilterAction() {
    return {
        type: actionTypes.CANCEL_CATEGORY_FILTER,
        payload: {}
    }
}
export function sortByViewsAction() {
    return {
        type: actionTypes.SOR_BY_VIEWS,
        payload: {}
    }
}
export function sortByDateAction() {
    return {
        type: actionTypes.SOR_BY_DATE,
        payload: {}
    }
}