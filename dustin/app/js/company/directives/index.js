module.exports = function (app) {
  require('./company_list')(app);
  require('./company_form')(app);
    require('./show_modal')(app);
};
