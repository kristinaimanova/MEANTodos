(function(){
    angular.module('MEANTodos') //getter syntax
        .controller('TodoController', TodoController);

        TodoController.$inject = ['$scope', 'TodoService'];

        function TodoController($scope, TodoService){
            $scope.todos = [];
            $scope.getTodos = getTodos;

            function getTodos(){
                console.log('Getting the todos...');
                TodoService.getAll()
                .then(function(response){
                
                    $scope.todos = response.data.todos;
                });
            }
        }
})();
