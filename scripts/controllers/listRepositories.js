// Repositories controller
app.controller('ListRepositories', function($scope, $state, repoService) {
    $scope.repoIssues = function(repoName) {
        $state.go("repoIssues", { repo: repoName })
    }
    $scope.searchRepo = function() {
        $scope.result = repoService.getRepoList($scope);
    }
});
