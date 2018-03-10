var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var UserViewModel = require("../../shared/view-models/user-view-model");

var user = new UserViewModel();

var page;

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    user.login();
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};