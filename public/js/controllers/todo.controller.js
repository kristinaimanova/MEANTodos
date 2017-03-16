(function(){
    angular.module('MEANTodos') //getter syntax
        .controller('TodoController', TodoController);

          TodoController.$inject = ['$scope'];

          function TodoController($scope){
            $scope.message = 'I work!';
            $scope.greeting = "hello";
            $scope.print = print;

            function print(something){
                console.log(something);
            }
        }
})()
