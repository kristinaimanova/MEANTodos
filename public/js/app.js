(function(){
  angular.module('MEANTodos', [])
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
})() //immediately invoked functional expression
