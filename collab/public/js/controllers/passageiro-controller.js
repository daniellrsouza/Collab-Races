angular.module('collab')
    .controller('PassageiroController', function($http, $scope, $routeParams) {

        $scope.passageiro = {};
        $scope.sexo = [{id: 'F', nome: 'Feminino'}, {id: 'M', nome: 'Masculino'}];
        $scope.mensagem = '';

        if($routeParams.passageiroId) {

            $http.get('/v1/passageiros/' + $routeParams.passageiroId)
            .success(function(passageiro) {
                $scope.passageiro = passageiro;
                $scope.passageiro.data_nscto = new Date($scope.passageiro.data_nscto);
            })
            .error(function(error) {
                console.log(error);
            });
        } 

        $scope.submeter = function() {

            if($scope.passageiro._id) {
                $http.put('/v1/passageiros/' + $routeParams.passageiroId, $scope.passageiro)
                .success(function(passageiro) {
                    $scope.mensagem = 'Passageiro atualizado com sucesso';
                })
                .error(function(error) {
                    console.log(error);
                });
            } else {
                $http.post('/v1/passageiros/', $scope.passageiro)
                .success(function(passageiro) {
                    $scope.passageiro = {};
                    $scope.mensagem = 'Passageiro cadastrado com sucesso';
                })
                .error(function(error) {
                    console.log(error);
                });
            }
            
        }

    });