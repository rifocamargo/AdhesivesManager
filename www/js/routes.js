angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
        
    .state('menu.login', {
      url: '/login',
      views: {
        'menu_content': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
    .state('menu.consultar', {
      url: '/find',
      views: {
        'menu_content': {
          templateUrl: 'templates/consultar.html',
          controller: 'consultarCtrl'
        }
      }
    })      

    .state('menu.criar', {
      url: '/create',
      views: {
        'menu_content': {
          templateUrl: 'templates/criar.html',
          controller: 'criarCtrl'
        }
      }
    })
        
    .state('menu.adesivo', {
      url: '/adhesive',
      views: {
          'menu_content': {
            templateUrl: 'templates/adesivo.html',
            controller: 'adesivoCtrl'
          }
      }      
    })
        
    .state('menu.cartela', {
      url: '/cartouche',
      views: {
          'menu_content': {
            templateUrl: 'templates/cartela.html',
            controller: 'cartelaCtrl'
          }
      }
    })
        
    .state('menu.folha', {
      url: '/leaf',
      views: {
          'menu_content': {
            templateUrl: 'templates/folha.html',
            controller: 'folhaCtrl'
          }
      }

    })  
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/login');

});