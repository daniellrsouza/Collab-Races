angular.module('collab', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider.when('/motoristas', {
        templateUrl:'partials/motoristas.html',
        controller:'MotoristasController'
    });

    $routeProvider.when('/passageiros', {
        templateUrl:'partials/passageiros.html',
        controller:'PassageirosController'
    });

    $routeProvider.when('/corridas', {
        templateUrl:'partials/corridas.html',
        controller:'CorridasController'
    });

    $routeProvider.when('/motoristas/new', {
        templateUrl:'partials/motorista.html',
        controller:'MotoristaController'
    });

    $routeProvider.when('/passageiros/new', {
        templateUrl:'partials/passageiro.html',
        controller:'PassageiroController'
    });

    $routeProvider.when('/corridas/new', {
        templateUrl:'partials/corrida.html',
        controller:'CorridaController'
    });

    $routeProvider.when('/motoristas/edit/:motoristaId', {
        templateUrl:'partials/motorista.html',
        controller:'MotoristaController'
    });

    $routeProvider.when('/passageiros/edit/:passageiroId', {
        templateUrl:'partials/passageiro.html',
        controller:'PassageiroController'
    });

    $routeProvider.when('/corridas/edit/:corridaId', {
        templateUrl:'partials/corrida.html',
        controller:'CorridaController'
    });

    $routeProvider.otherwise({redirectTo: '/corridas'});

});