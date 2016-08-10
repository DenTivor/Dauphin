define(function(require, exports, module) {

return (function(){
	function controller(settings) {
		this.name = settings.name;
		this.initialNodeSelector = settings.initialNodeSelector;
		this.targetWrapperSelector = settings.targetWrapperSelector;
		this.deleteButtonSelector = settings.actionButtons.deleteButtonSelector;
		this.addButtonSelector = settings.actionButtons.addButtonSelector;

		this.initialEl;
		this.targetWrapperEl;

		this.init();
	}

	controller.prototype.init = function() {
		this.initialEl = $(this.initialNodeSelector);
		this.targetWrapperEl = $(this.targetWrapperSelector);
	}	

	controller.prototype.addNode = function() {
		var newEl = this.initialEl.clone();
		newEl = this.preprocessNewElement(newEl);

		this.targetWrapperEl.append(newEl);
	}

	controller.prototype.preprocessNewElement = function(el) {
		el.attr("node-wrapper", "");
		el.attr("last-item","true");

		var el = this.bindButtonsActions(el);
		return el;
	}

	controller.prototype.bindButtonsActions = function(el) {
		var addBtn = el.find(this.addButtonSelector);
		var deleteBtn = el.find(this.deleteButtonSelector);

		deleteBtn.off('click').on('click',  _.bind(this.onDeleteBtnClick, this));
		addBtn.off('click').on('click',  _.bind(this.onAddButtonClick, this));

		return el;
	}

	controller.prototype.onDeleteBtnClick = function(e) {
		this.removeNodeItem(e);
	}

	controller.prototype.onAddButtonClick = function(e) {
		$("[last-item]").attr("last-item", "false");
		this.addNewNodeItem(e);
	}


	controller.prototype.removeNodeItem = function(e) {
		var node = this.getNodeItem(e.target);
		node.remove();

		var nodes = $("[last-item]");
		var length = nodes.length;

		if (length > 0) {
			var lastNode = $(nodes[length-1]);
			lastNode.attr("last-item", "true");
		}
	}


	controller.prototype.getNodeItem = function(el) {
		var parent = $(el).closest("[node-wrapper]");

		return parent;
	}

	controller.prototype.addNewNodeItem = function() {
		this.addNode();
	}

	// controller.prototype.someFunction = function() {

	// }

	return controller;
})();

});