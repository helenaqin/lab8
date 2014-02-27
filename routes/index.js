
var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	project_info = {'grid': false, 'projects_test': projects['projects']};
  	res.render('index', project_info);
};

exports.viewGrid = function(req, res){
  	project_info = {'grid': true, 'projects': projects['projects']};
	res.render('index', project_info);
};