/**
 * Application.ts
 *
 */

/// <reference path="_references.ts" />

module IMCV.Koluki {
    "use strict";

    var app = angular.module("shopApp", [
        "ngRoute",
        "ngAnimate",
        "ngResource",
        "ui.bootstrap",
        "toaster"
    ]);

    app.config(["$routeProvider", RouteConfig.configure]);
    app.config(["toasterConfig", (toasterConfig) => {
        angular.extend(toasterConfig, {
            'position-class': 'toast-bottom-full-width',
            'close-button': false,
            'time-out': 3000
        });
    }]);

    app.factory("CartRepository", () => { return new CartRepository(); });
    app.factory("CategoryResource", ["$resource", CategoryResourceFactory.Create]);
    app.factory("CategoryRepository", ["CategoryResource", (categoryResource) => { return new CategoryRepository(categoryResource); }]);

    app.controller("ApplicationController", ApplicationController);
    app.controller("PromotionController", PromotionController);
    app.controller("CategoryController", CategoryController);
    app.controller("CartController", CartController);
    app.controller("OrderController", OrderController);
    app.controller("ShopHomeController", ShopHomeController);
    app.controller("ShopCategoryController", ShopCategoryController);

    app.directive("loading", ["$rootScope", ($rootScope) => { return new LoadingDirective($rootScope); }]);

}