var app = angular.module('blackSwan', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('repositories', {
        url: '/',
        templateUrl: '/views/repositories.html',
        controller: 'ListRepositories',
        controllerAs: 'repositories'
    }).state('issues', {
        url: '/issues',
        templateUrl: '/views/issues.html',
        controller: 'ListIssues',
        controllerAs: 'issues'
    }).state('repoIssues', {
        url: '/issues/:repo',
        templateUrl: '/views/issues.html',
        controller: 'ListIssues',
        controllerAs: 'issues'
    });
});
