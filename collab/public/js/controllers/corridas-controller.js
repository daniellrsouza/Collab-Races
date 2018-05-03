angular.module('collab')
    .controller('CorridasController', function($scope, $http, $routeParams) {

        $scope.corridas = [];
        $scope.filtro = '';
        
        $http.get('/v1/corridas')
        .success(function(corridas) {
            $scope.corridas = corridas;
        })
        .error(function(error) {
            console.log(error);
        })

        $scope.remover = function(corrida) {
            $http.delete('/v1/corridas/' + corrida._id)
            .success(function() {
                var indice = $scope.corridas.indexOf(corrida);
                $scope.corridas.splice(indice, 1);
                console.log('Corrida removida com sucesso')
            })
            .error(function(error) {
                console.log(error);
            });

        };

    })