module.exports = function (app) {
  app.directive('companyForm', function () {
    return {
      templateUrl: './templates/company/company-form.html',
      scope: {
        company: '=',
        type: '@'
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        $scope.deleteCompany = controller.deleteCompany;
        console.log($scope.type);
        $scope.submit = $scope.type === 'new' ? controller.addCompany : controller.updateCompany;
      }
    };
  });
};
