(function(){
  angular.module('MEANTodos')
    .factory('TodoService', TodoService);

    TodoService.$inject = ['$http']; //$http == axios

    function TodoService($http){
      var baseURL = '/todos';
      var todos= [];

      function fetch(){
        return todos;
      }

      function getAll(){
        return $http.get(baseURL)
                    .then(function(response){
                      todos = response.data.todos;
                    });
      }

      function create(todo){
        return $http.post(baseURL, todo)
                    .then(getAll);
      }

      function deleteTodo(todo){
        return $http.delete(`${baseURL}/${todo._id}`)
                    .then(getAll);
      }

      function update(todo){
        return $http.put(`${baseURL}/${todo._id}`, todo)
                    .then(getAll);
      }


      return {
        getAll: getAll,
        create: create,
        delete: deleteTodo,
        update: update,
        fetch: fetch
      };

    }
})();
