define(function(require, exports, module) {

return (function(){
	function controller(settings) {
		this.name = settings.name;
		this.initialNodeSelector = settings.initialNodeSelector;
		this.targetWrapperSelector = settings.targetWrapperSelector;
		this.deleteButtonSelector = settings.actionButtons.deleteButtonSelector;
		this.addButtonSelector = settings.actionButtons.addButtonSelector;
		this.dataElements = settings.dataElements;
		this.targetInputDataSelector = settings.targetInputDataSelector;

		this.initialEl;
		this.targetWrapperEl;
		this.targetInputDataEl;

		this.init();
	}


	controller.prototype.init = function() {
		this.initialEl = $(this.initialNodeSelector);
		this.targetWrapperEl = $(this.targetWrapperSelector);
		this.targetInputDataEl = $(this.targetInputDataSelector);
	}	


	controller.prototype.addNode = function(data) {
		var newEl = this.initialEl.clone();
		newEl = this.preprocessNewElement(newEl, data);

		this.targetWrapperEl.append(newEl);
	}


	controller.prototype.preprocessNewElement = function(el, data) {
		el.attr("node-wrapper", "");
		el.attr("last-item","true");

		if (!(_.isUndefined(data))) {
			el = this.applyNodeData(el, data);
		}

		el = this.bindButtonsActions(el);
		return el;
	}


	controller.prototype.applyNodeData = function(el, data) {
		var that = this;
		var type, selector, arraykey;
		var value;
		var targetEl;

		_.each(this.dataElements, function(element) {
			type = element.type;
			selector = element.selector;
			arraykey = element.arraykey;
			value = data[arraykey];
			targetEl = $(el).find(selector);

			switch (type) {
				case "input": 
					targetEl.val(value);
					break;
				default:
					console.log("There is no defined data setter for element");
			}
		});

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
		this.remarkNodesAttributes();
	}


	controller.prototype.removeNodeItem = function(e) {
		var node = this.getNodeItem(e.target);
		node.remove();

		this.remarkNodesAttributes();
	}


	controller.prototype.remarkNodesAttributes = function() {
		var nodes = $("[last-item]");
		var length = nodes.length;

		if (length > 0) {
			var lastNode = $(nodes[length-1]);
			lastNode.attr("last-item", "true");

			nodes.splice(length-1, 1);
			nodes.attr("last-item", "false");
		}

	}


	controller.prototype.getNodeItem = function(el) {
		var parent = $(el).closest("[node-wrapper]");

		return parent;
	}


	controller.prototype.addNewNodeItem = function() {
		this.addNode();
	}


	controller.prototype.getData = function() {
		var that = this;
		var nodesSelector = this.targetWrapperSelector + " " + "[node-wrapper]";
		var nodes = $(nodesSelector);
		var result = [];
		var nodeDatas = {};

		_.each(nodes, function(node) {
			nodeDatas = that.defineNodeDatas(node);
			result.push(nodeDatas);
		});

		parsedResult = this.removeEmptyDatas(result);
		parsedResult = this.transformParsedData(parsedResult);
		this.setDatasToTargetElement(parsedResult);

		return parsedResult;
	}


	controller.prototype.defineNodeDatas = function(node) {
		var el = $(node);
		var that = this;
		var result = {};
		var type, dataEl;

		_.each(this.dataElements, function(dataElement) {
			type = dataElement.type;
			dataEl = el.find(dataElement.selector);

			switch (type) {
				case "input":
					result[dataElement.arraykey] = $(dataEl).val();
				break;
				default:
					console.log("Can't define node type during parsing datas");
			}
		});

		return result;
	}


	controller.prototype.transformParsedData = function(data) {
		var result;

		if (!(_.isEmpty(data))) {
			result =  JSON.stringify(data);
		}

		return result;
	}


	controller.prototype.setDatasToTargetElement = function(datas) {
		this.targetInputDataEl.val(datas);
	}


	controller.prototype.removeEmptyDatas = function(datas) {
		var result = [];
		var values = [];
		var filterResult;

		_.each(datas, function(data) {
			values = _.values(data);
			filterResult = _.every(values, function(num) {return num != ""});
			
			if (filterResult) {
				result.push(data);
			}

		});

		return result;
	}


	controller.prototype.loadData = function(json) {
		var datas = this.parseLoadedObject(json);
		var that = this;

		this.cleanTargetWrapper();

		_.each(datas,  function(data){
			that.addNode(data);
		});

		this.remarkNodesAttributes();
	}


	controller.prototype.parseLoadedObject = function(json) {
		var result = JSON.parse(json);

		return result;
	}


	controller.prototype.cleanTargetWrapper = function() {
		this.targetWrapperEl.empty();
	}


	// controller.prototype.someFunction = function() {

	// }

	return controller;
})();

});


























































