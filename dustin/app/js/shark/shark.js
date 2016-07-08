module.exports = function (app) {
  require('./controllers/shark-controller')(app);
  require('./directives')(app);
};
