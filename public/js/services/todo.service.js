(function(){
    angular.module('MEANTodos')
    .factory('TodoService', TodoService);
    TodoService.$inject = ['$http'];//$http == axios

    function TodoService($http){
        var baseURL = '/todos';

        function getAll(){
            return $http.get(baseURL);
        }

        function create(x){
            return $http.post(baseURL, x);
        }
        function deleteTodo(todo){
            return $http.delete(`${baseURL}/${todo._id}`);
        }
        return {
            getAll: getAll,
            create: create,
            delete: deleteTodo
        };
    }
})();
