var myTherapyApp = angular.module('xApp', []);

myTherapyApp.controller('TherapyController', ["$scope", function($scope){
    
    $scope.removeTherapist = function(x) {
        var removeTherapist = $scope.therapists.indexOf(x);
        $scope.therapists.splice(removeTherapist, 1);
    };
    
    $scope.addTherapist = function() {
        $scope.therapists.push({
            name: $scope.newtherapist.name,
            focus: $scope.newtherapist.focus,
            rate: parseInt($scope.newtherapist.rate),
            available: true
        });
        
        $scope.newtherapist.name = "";
        $scope.newtherapist.focus = "";
        $scope.newtherapist.rate = "";
        
    };
    
    
    $scope.message="Welcome To Therapy Finder";
    $scope.therapists = [
    {
        name: "Lana Perez LCSW",
        focus: "green",
        rate: 90,
        available: true
    },
    {
        name: "David Lorens PsyD",
        focus: "red",
        rate: 120,
        available: true
    },
    {
        name: "Jenn Sandberg LCSW",
        focus: "green",
        rate: 90,
        available: true
    },
    {
        name: "Matt Douglass MSW",
        focus: "blue",
        rate: 75,
        available: true
    },
    {
        name: "Alice Brier PhD",
        focus: "purple",
        rate: 65,
        available: true
    },
    {
        name: "Emily Richter PhD",
        focus: "pink",
        rate: 120,
        available: true
    }
    
 
   ];
    
    
}]);