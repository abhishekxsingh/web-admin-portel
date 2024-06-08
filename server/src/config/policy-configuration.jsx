const config = {
    "newsRoute": {
        route: "news",
        navigation: {
            name: "news shots",
            slug: "news shots",
        },
        accessedBy: ['admin', 'operation', 'support'],
        children: [
            { path: 'news', title: 'news category list' },
            { path: 'news', title: 'news tags list' },
        ]
    },
    "newsDetailRoute": {
        route: "news/detail/:publicId",
        navigation: {
            name: "news details",
            slug: "newsDetails",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "usersRoute": {
        route: "users",
        navigation: {
            name: "Users",
            slug: "users",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "dashboardRoute": {
        route: "dashboard",
        navigation: {
            name: "Dashboard",
            slug: "dashboard",
        },
        accessedBy: ['admin', 'operation', 'support'],
    },
    "customersRoute": {
        route: "customers",
        navigation: {
            name: "Customers",
            slug: "customers",
        },
    },
    "customerProfileRoute": {
        route: "customer/profile/:userId",
        navigation: {
            name: "customerProfile",
            slug: "customerProfile",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "userProfileRoute": {
        route: "user/profile/:userId",
        navigation: {
            name: "userProfile",
            slug: "userProfile",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "userWalletDetailRoute": {
        route: "wallet/:userId/details/:publicId",
        navigation: {
            name: "userWalletDetails",
            slug: "userWalletDetails",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "newsRoute": {
        route: "news",
        navigation: {
            name: "News Shorts",
            slug: "news-shorts",
        },
        accessedBy: ['admin', 'operation', 'support'],
    },
    "newsCategoryList": {
        route: "category",
        navigation: {
            name: "News Category List",
            slug: "newsCategoryList",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "newsTagList": {
        route: "tags",
        navigation: {
            name: "News Tag List",
            slug: "newsTagList",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "newsDetailRoute": {
        route: "news/detail/:publicId",
        navigation: {
            name: "news details",
            slug: "newsDetails",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "newsCreateRoute": {
        route: "news/compose",
        navigation: {
            name: "news create",
            slug: "newsCreate",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
    "newsEditRoute": {
        route: "news/edit/:publicId",
        navigation: {
            name: "news edit",
            slug: "newsEdit",
        },
        accessedBy: ['admin', 'operation', 'support']
    },
};

export default config;
