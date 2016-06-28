module.exports = function (app) {
  app.directive('companyList', function () {
    return {
      templateUrl: './templates/company/company-list.html',
      scope: {
        companies: '='
      }
    };
  });
};
