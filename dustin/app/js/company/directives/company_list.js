module.exports = function (app) {
  app.directive('companyList', function () {
    return {
      templateUrl: './templates/company/company-list.html',
      scope: {
        companies: '='
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        $scope.openModal = function (company) {
          controller.openModal(company, function(company){
            setTimeout(() => {
              let m = '#modal-' + company._id;
              $(m)
                .modal('show');
            }, 50);

          })
        };
      }
    };
  });
};
