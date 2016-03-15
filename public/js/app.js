angular.module('personalApp', ['ui.router'])
  .config( function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'js/about/aboutTmpl.html',
        controller: 'aboutCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: '/js/projects/projectsTmpl.html',
        controller: 'projectsCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/js/contact/contactTmpl.html',
        controller: 'contactCtrl'
      })
    $urlRouterProvider
      .otherwise('/home')
    });
