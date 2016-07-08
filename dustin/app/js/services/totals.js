module.exports = function(app) {
  app.factory('totals', function() {
    const service = {};

    service.amount = function(companies){
      return companies.reduce(function(a,b){
        return a + b.tvDealAmount;
      }, 0);
    };

    return service;
  });
};
