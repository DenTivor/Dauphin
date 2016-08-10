define(function(require, exports, module) {

return (function(){
	function controller(settings) {
		this.name = settings.name;
		this.initialNodeSelector = settings.initialNodeSelector;

		this.someFunction();
	}

	controller.prototype.someFunction = function() {
		console.log("call internal function");
	}

	return controller;
})();

});