// Header controller
app.controller('Header', function($scope, $state) {
    $scope.$state = $state;
    $scope.menuItems = [{
        id: 'repositories',
        title: 'Repositories',
        link: '/#/',
    }, {
        id: 'issues',
        title: 'Issues',
        link: '/#/issues'
    }];
    $scope.expandMenu = function() {
        var divs = document.getElementsByClassName('collapse');
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].style.display === 'block') {
                divs[i].style.display = 'none';
            } else {
                divs[i].style.display = 'block';
            }
        }
    }
});
