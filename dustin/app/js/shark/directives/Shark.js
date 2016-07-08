module.exports = function (app) {
  app.directive('sharkList', function () {
    return {
      templateUrl: './templates/shark/sharks-list.html',
      scope: {
        sharks: '='
      }
    };
  });
};
