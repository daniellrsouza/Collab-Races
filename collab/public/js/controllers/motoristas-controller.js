angular.module('collab')
    .controller('MotoristasController', function($scope, $http, $routeParams) {

        $scope.motoristas = [];
        $scope.filtro = '';
        
        $http.get('/v1/motoristas')
        .success(function(motoristas) {
            $scope.motoristas = motoristas;
        })
        .error(function(error) {
            console.log(error);
        })

        $scope.remover = function(motorista) {
            $http.delete('/v1/motoristas/' + motorista._id)
            .success(function() {
                var indice = $scope.motoristas.indexOf(motorista);
                $scope.motoristas.splice(indice, 1);
                console.log(motorista.nome + ' removido com sucesso')
            })
            .error(function(error) {
                console.log(error);
            });

        };

});