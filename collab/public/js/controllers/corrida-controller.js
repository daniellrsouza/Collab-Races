angular.module('collab')
    .controller('CorridaController', function($scope, $http, $routeParams) {

        $scope.corrida = {};
        $scope.passageiros = [];
        $scope.motoristas = [];
        $scope.mensagem = '';

        // Define o valor dos selects
        $http.get('/v1/motoristas/ativos')
             .success(function(motoristas) {
                $scope.motoristas = motoristas.map(function(motorista) {
                    return {_id : motorista._id, nome: motorista.nome};
                });
             })
             .error(function(error) {
                console.log(error);
             });

        $http.get('/v1/passageiros/')
             .success(function(passageiros) {
                $scope.passageiros = passageiros.map(function(passageiro) {
                    return {_id : passageiro._id, nome : passageiro.nome};
                });
             })
             .error(function(error) {
                console.log(error);
             });
        // fim

        if($routeParams.corridaId) {

            $http.get('/v1/corridas/' + $routeParams.corridaId)
            .success(function(corrida) {
                $scope.corrida = corrida;
            })
            .error(function(error) {
                console.log(error);
            });
        } 

        $scope.submeter = function() {

            buscaPassageiro = $scope.passageiros.find(function(passageiro) {
                if(passageiro._id == $scope.corrida.passageiro._id)
                    return passageiro;  
            });
            
            $scope.corrida.passageiro.nome = buscaPassageiro.nome;
            
            buscaMotorista = $scope.motoristas.find(function(motorista) {
                if(motorista._id == $scope.corrida.motorista._id)
                    return motorista;  
            });

            $scope.corrida.motorista.nome = buscaMotorista.nome;;
                
            if($scope.corrida._id) {
                
                $http.put('/v1/corridas/' + $routeParams.corridaId, $scope.corrida)
                .success(function() {
                    $scope.mensagem = 'Corrida atualizada com sucesso';
                })
                .error(function(error) {
                    console.log(error);
                });
            } else {
                
                $http.post('/v1/corridas/', $scope.corrida)
                .success(function() {
                    $scope.corrida = {};
                    $scope.mensagem = 'Corrida cadastrada com sucesso';
                })
                .error(function(error) {
                    console.log(error);
                });
            }
            
        }
});