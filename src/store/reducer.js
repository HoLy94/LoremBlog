import * as actionTypes from './actionTypes';

const initialState = {
    isAdmin: true,
    articles: [],
    articlesPage: [],
    popularArticles: [],
    newArticles: [],
    limit: 6,
    currentPage: 1,
    maxPages: null,
    filteredArticles: [],
    filteredCategory: null,
    galleryItems: [],
    isArticleUpdated: false,
    articleToUpdate: {},
    isArticleCreate: false,
    isViewsSorted: false,
    isDateSorted: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ARTICLES:
            return {
                ...state,
                articles: action.payload.articles.reverse(),
                filteredArticles: action.payload.articles.reverse(),
                articlesPage: action.payload.articles.reverse().slice(0, state.limit),
                maxPages: Math.ceil(action.payload.articles.length / state.limit)
            };
        case actionTypes.SET_GALLERY:
            return {
                ...state,
                galleryItems: [...action.payload.items],
            };
        case actionTypes.NEW_ARTICLE:
            return {
                ...state,
                isArticleCreate: true
            };
        case actionTypes.CREATE_ARTICLE:
            return {
                ...state,
                articles: [action.payload.article, ...state.articles],
                articlesPage: [action.payload.article, ...state.articlesPage.filter((article, index) => {
                    return index !== state.articlesPage.length - 1;
                })],
                filteredArticles: [action.payload.article, ...state.filteredArticles],
                isArticleCreate: false,
                maxPages: Math.ceil(state.filteredArticles.length + 1 / state.limit) > state.maxPages ? state.maxPages + 1 : state.maxPages,
            };
        case actionTypes.CANCEL_ARTICLE_CREATE:
            return {
                ...state,
                isArticleCreate: false
            };
        case actionTypes.TAKE_ARTICLE_TO_UPDATE:
            return {
                ...state,
                articleToUpdate: state.articles.filter(article => {
                    return article.id === action.payload;
                }),
                isArticleUpdated: true
            };
        case actionTypes.UPDATE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(article => {
                    if (article.id === +action.payload.article.id) {
                        return {
                            ...article,
                            title: action.payload.article.title,
                            author: action.payload.article.author,
                            date: action.payload.article.date,
                            img: action.payload.article.img
                        }
                    }
                    return article;
                }),
                articlesPage: state.articlesPage.map(article => {
                    if (article.id === +action.payload.article.id) {
                        return {
                            ...article,
                            title: action.payload.article.title,
                            author: action.payload.article.author,
                            date: action.payload.article.date,
                            img: action.payload.article.img
                        }
                    }
                    return article;
                }),
                isArticleUpdated: false
            };
        case actionTypes.CANCEL_ARTICLE_UPDATE:
            return {
                ...state,
                isArticleUpdated: false,
            };
        case actionTypes.DELETE_ARTICLE:
            return {
                ...state,
                filteredArticles: state.filteredArticles.filter(article => {
                    return article.id !== action.payload.id;
                }),
                articlesPage: state.articlesPage.length < 2
                    ? [...state.filteredArticles.slice(state.limit * ((state.currentPage - 1) - 1), state.limit * (state.currentPage - 1))]
                    : state.articlesPage.filter(article => {
                        return article.id !== action.payload.id;
                    }),
                maxPages: state.articlesPage.length < 2 ? state.maxPages - 1 : state.maxPages,
                currentPage: state.articlesPage.length < 2 ? state.currentPage - 1 : state.currentPage
            };
        //    Popular\new articles
        case actionTypes.SET_POPULAR_ARTICLES:
            return {
                ...state,
                popularArticles: action.payload.articles.sort(function (a, b) {
                    return a.views - b.views
                }).reverse().slice(0, 4)
            };
        case actionTypes.SET_NEW_ARTICLES:
            return {
                ...state,
                newArticles: action.payload.articles.sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date)
                }).reverse().slice(0, 4)
            };
        //    Pagination\limit
        case actionTypes.NEXT_PAGE:
            return {
                ...state,
                articlesPage: [...state.filteredArticles.slice(state.limit * ((state.currentPage + 1) - 1), state.limit * (state.currentPage + 1))],
                currentPage: state.currentPage + 1,
            };
        case actionTypes.PREV_PAGE:
            return {
                ...state,
                articlesPage: [...state.filteredArticles.slice(state.limit * ((state.currentPage - 1) - 1), state.limit * (state.currentPage - 1))],
                currentPage: state.currentPage - 1,
            };
        case actionTypes.CURRENT_PAGE:
            return {
                ...state,
                articlesPage: [...state.filteredArticles.slice(state.limit * (+action.payload.page - 1), state.limit * +action.payload.page)],
                currentPage: +action.payload.page,
            };
        case actionTypes.CHANGE_LIMIT:
            return {
                ...state,
                articlesPage: [...state.filteredArticles.slice(+action.payload.limit * (state.currentPage - 1), +action.payload.limit * state.currentPage)],
                limit: +action.payload.limit,
                maxPages: Math.ceil(state.filteredArticles.length / +action.payload.limit)
            };
        //    Filter\sort
        case actionTypes.CATEGORY_FILTER:
            return {
                ...state,
                currentPage: 1,
                filteredCategory: action.payload.category,
                filteredArticles: state.articles.filter(article => {
                    return article.category.includes(action.payload.category)
                }),
                articlesPage: state.articles.filter(article => {
                    return article.category.includes(action.payload.category)
                }).slice(0, state.limit),
                maxPages: Math.ceil(state.articles.filter(article => {
                    return article.category.includes(action.payload.category)
                }).length / state.limit),
            };
        case actionTypes.CANCEL_CATEGORY_FILTER:
            return {
                ...state,
                currentPage: 1,
                filteredCategory: null,
                filteredArticles: state.articles,
                articlesPage: state.articles.slice(0, state.limit),
                maxPages: Math.ceil(state.articles.length / state.limit)
            };
        case actionTypes.SOR_BY_VIEWS:
            return {
                ...state,
                articles: state.isViewsSorted ? state.articles.sort(function (a, b) {
                    return a.views - b.views
                }) : state.articles.sort(function (a, b) {
                    return a.views - b.views
                }).reverse(),
                isViewsSorted: !state.isViewsSorted,
                articlesPage: state.articles.slice(0, state.limit),
            };
        case actionTypes.SOR_BY_DATE:
            return {
                ...state,
                articles: state.isDateSorted ? state.articles.sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date)
                }) : state.articles.sort(function (a, b) {
                    return new Date(a.date) - new Date(b.date)
                }).reverse(),
                isDateSorted: !state.isDateSorted,
                articlesPage: state.articles.slice(0, state.limit),
            };
        default:
            return state;
    }
};

export default reducer;