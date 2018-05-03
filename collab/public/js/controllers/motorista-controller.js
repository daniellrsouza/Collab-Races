angular.module('collab')
    .controller('MotoristaController', function($scope, $http, $routeParams) {

        $scope.motorista = {};
        $scope.status = [{id: 1, nome: 'Ativo'}, {id: 2, nome: 'Inativo'}];
        $scope.sexo = [{id: 'F', nome: 'Feminino'}, {id: 'M', nome: 'Masculino'}];
        $scope.mensagem = '';

        if($routeParams.motoristaId) {

            $http.get('/v1/motoristas/' + $routeParams.motoristaId)
            .success(function(motorista) {
                $scope.motorista = motorista;
                $scope.motorista.data_nscto = new Date($scope.motorista.data_nscto);
            })
            .error(function(error) {
                console.log(error);
            });
        } 

        $scope.submeter = function() {

            if($scope.motorista._id) {
                $http.put('/v1/motoristas/' + $routeParams.motoristaId, $scope.motorista)
                .success(function(motorista) {
                    $scope.mensagem = 'Motorista atualizado com sucesso';
                })
                .error(function(error) {
                    console.log(error);
                });
            } else {
                $http.post('/v1/motoristas/', $scope.motorista)
                .success(function(motorista) {
                    $scope.motorista = {};
                    $scope.mensagem = 'Motorista cadastrado com sucesso';
                })
                .error(function(error) {
                    console.log(error);
                });
            }
            
        }
});