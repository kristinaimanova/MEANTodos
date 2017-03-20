(function(){
  angular.module('MEANTodos') //getter syntax
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo = {};
      $scope.addTodo = addTodo;
      $scope.deleteTodo = deleteTodo;
      $scope.update = update;
      $scope.edit = edit;
      $scope.checkbox = checkbox;

      getTodos();
      
      function checkbox(todo){
          TodoService.update(todo)
          .then(function(response){
              getTodos();
              console.log('checking completed');
          });
      }

      $scope.$watch(function watcher(){
        return TodoService.fetch();
      },
      function onChange(){
        $scope.todos = TodoService.fetch();
      });

      function edit(todo){
        console.log('editing...');
        todo.edit = true;
      }

      function update(todo){
        console.log('updating...');
        todo.edit = false;
        TodoService.update(todo);
      }

      function deleteTodo(todo){
        TodoService.delete(todo);
      }

      function addTodo(newTodo){
        console.log('Creating a new todo...');
        TodoService.create(newTodo)
                  .then(function(response){
                    $scope.newTodo = {};
                  });
      }

      function getTodos(){
        console.log('Getting the todos...');
        TodoService.getAll();
      }

    }
})();
