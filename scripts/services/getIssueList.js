// Get list of Github issues
app.service('issueService', function($http) {
    this.getIssueList = function($scope, repoName) {
        var filter = $scope.searchIssueText;
        if(repoName){
            filter = 'repo:' + repoName;
        }
        $scope.isSearching = true;
        $http({
            method: 'GET',
            url: 'https://api.github.com/search/issues',
            params: {
                q: filter,
                format: 'json'
            }
        }).success(function(data) {
            $scope.result = data;
            $scope.isSearching = false;
        }).error(function(error) {
            console.log('error!');
            $scope.isSearching = false;
        })
    }
});