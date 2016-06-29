module.exports = function (app) {
  app.directive("showmodal", function ($compile, $templateRequest) {
    let modaltemplate;
    $templateRequest('./templates/company/company-modal.html').then(function (template) {
      modaltemplate = template;
    }, function () {
      console.log(err);
    });

    return function (scope, element, attrs) {
      element.on("click", function () {
        scope.company = attrs.company
        console.log(attrs.company);
        scope.$apply(function () {
          content = $compile(modaltemplate)(scope)
          angular.element(document.getElementById('modals')).append(content);
        });
      });

  };
  });
}
