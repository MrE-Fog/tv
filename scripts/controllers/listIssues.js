// Issues controller
app.controller('ListIssues', function($scope, $stateParams, $state, issueService) {
    if ($stateParams.repo) {
        $scope.result = issueService.getIssueList($scope, $stateParams.repo);
        $scope.searchIssueText = 'repo:' + $stateParams.repo
    }
    $scope.searchIssue = function() {
        $scope.result = issueService.getIssueList($scope);
    }
});
