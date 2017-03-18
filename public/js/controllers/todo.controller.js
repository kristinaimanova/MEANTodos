(function(){
    angular.module('MEANTodos') //getter syntax
        .controller('TodoController', TodoController);

        TodoController.$inject = ['$scope', 'TodoService'];

        function TodoController($scope, TodoService){
            $scope.todos = [];
            $scope.newTodo = {};
            $scope.addTodo = addTodo;
            $scope.deleteTodo = deleteTodo;
            getTodos();

            function getTodos(){
                console.log($scope.todos);
                TodoService.getAll()
                .then(function(response){

                    $scope.todos = response.data.todos;
                });
            }

            function addTodo(newTodo){
                console.log("add a new todo");
                TodoService.create(newTodo)
                            .then(function(response){
                                getTodos();
                                $scope.newTodo = {};
                            });

            }
            function deleteTodo(todo){
                TodoService.delete(todo)
                            .then(function(response){
                                console.log(response);
                                getTodos();
                            })
            }
        }
})();
