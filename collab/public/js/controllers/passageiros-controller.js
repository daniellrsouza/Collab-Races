angular.module('collab')
    .controller('PassageirosController', function($scope, $http) {

    $scope.passageiros = [];
    $scope.filtro = '';

    $http.get('/v1/passageiros')
    .success(function(passageiros) {
        $scope.passageiros = passageiros;
    })
    .error(function(error) {
        console.log(error);
    })

    $scope.remover = function(passageiro) {
        $http.delete('/v1/motoristas/' + passageiro._id)
        .success(function() {
            var indice = $scope.passageiros.indexOf(passageiro);
            $scope.passageiros.splice(indice, 1);
            console.log(passageiro.nome + ' removido com sucesso')
        })
        .error(function(error) {
            console.log(error);
        });

    };

});