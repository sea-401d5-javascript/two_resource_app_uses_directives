module.exports = function (app) {
  require('./company_list')(app);
  require('./company_form')(app);
};
