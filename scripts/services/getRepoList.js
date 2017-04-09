// Get list of Github repositories
app.service('repoService', function($http) {
    this.getRepoList = function($scope) {
    	$scope.isSearching = true;
        $http({
            method: 'GET',
            url: 'https://api.github.com/search/repositories',
            params: {
                q: $scope.searchRepoText,
                format: 'json'
            }
        }).success(function(data) {
            $scope.result = data;
            $scope.isSearching = false;
        }).error(function(error) {
            console.log('error!');
            $scope.isSearching = false;
        });
    };
});
