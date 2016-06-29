'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const sharkListTemplate = require('../app/templates/shark/sharks-list.html');
const sharkFormTemplate = require('../app/templates/shark/shark-form.html');

describe('shark directives', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('SharkTankApp');
    angular.mock.inject(function (_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should list sharks', () => {
    $httpBackend.expectGET('./templates/shark/sharks-list.html')
      .respond(200, sharkListTemplate);
    $httpBackend.expectGET('./templates/shark/shark-form.html')
      .respond(200, sharkFormTemplate);
    $scope.sharks = [{
      name: 'Kevin'
    }, {
      name: 'Robert'
    }];

    let link = $compile('<div data-ng-controller="SharkController as sharkctrl"><shark-list sharks="sharks"></shark-list></div>')
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let shark = directive.find('a')[0].innerText;
    expect(shark).toBe('Kevin');
  });

  it('should form', () => {
    $httpBackend.expectGET('./templates/shark/sharks-list.html')
      .respond(200, sharkListTemplate);
    $httpBackend.expectGET('./templates/shark/shark-form.html')
      .respond(200, sharkFormTemplate);
    $scope.sharks = [{
      name: 'Kevin'
    }, {
      name: 'Robert'
    }];

    let link = $compile('<div data-ng-controller="SharkController as sharkctrl"><shark-list sharks="sharks"></shark-list></div>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let form = directive.find('shark-form');

    console.log(form);
    expect(form.length).toBe(2);
  });

});
