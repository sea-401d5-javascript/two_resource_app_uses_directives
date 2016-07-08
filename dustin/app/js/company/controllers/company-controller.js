module.exports = function (app) {
  app.controller('CompanyController', ['$http','totals', CompanyController]);

  function CompanyController($http, totals) {
    this.$http = $http;
    this.companies = [];
    this.modalCompany = {};

    this.openModal = function (company, cb) {
      this.modalCompany = company;
      if (cb) cb(company);
    }.bind(this);

    this.addCompany = function (company) {
      $http.post('http://localhost:3000/companies', company)
        .then((res) => {
          this.companies.push(res.data);
          this.newcompany = null;
        }, (err) => {
          console.log(err);
        });
    }.bind(this);

    this.deleteCompany = (company) => {
      $http.delete('http://localhost:3000/companies/' + company._id)
        .then(() => {
          let index = this.companies.indexOf(company);
          this.companies.splice(index, 1);
        }, (err) => {
          console.log(err);
        });
    };

    this.getCompanies = function () {
      this.$http.get('http://localhost:3000/companies')
        .then((res) => {
          this.companies = res.data;
          this.totalamount = totals.amount(this.companies);
        }, (err) => {
          console.log(err);
        });
    };

    this.updateCompany = function (company) {
      this.$http.put('http://localhost:3000/companies', company)
        .then(() => {
          this.companies = this.companies.map(n => {
            return n._id === company._id ? company : n;
          });
        }, (err) => {
          console.log(err);
        });
    }.bind(this);
  }
};
