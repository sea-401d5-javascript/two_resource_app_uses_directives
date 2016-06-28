module.exports = function (app) {
  app.directive('sharkForm', function () {
    return {
      templateUrl: './templates/shark/shark-form.html',
      scope: {
        shark: '=',
        type: '@'
      },
      require: '^^ngController',
      link: function ($scope, elem, attr, controller) {
        $scope.deleteShark = controller.deleteShark;
        console.log($scope.type);
        $scope.submit = $scope.type === 'new' ? controller.addShark : controller.updateShark;
      }
    };
  });
};
