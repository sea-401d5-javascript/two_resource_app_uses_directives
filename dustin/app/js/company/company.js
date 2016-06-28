module.exports = function(app) {
  require('./controllers/company-controller')(app);
  require('./directives')(app);

};
