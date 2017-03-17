(function(){
    angular.module('MEANTodos') //getter syntax
        .controller('TodoController', TodoController);

        TodoController.$inject = ['$scope', 'TodoService'];

        function TodoController($scope, TodoService){

        }
})();
