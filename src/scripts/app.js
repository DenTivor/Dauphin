define(['duplicator'], function(Duplicator) {

  var settings = {
  	name: 'firstNode',
    initialNodeSelector: ".initial-node-wrapper",
    targetWrapperSelector: ".core-wrapper",

    actionButtons: {
      addButtonSelector: ".add-node",
      deleteButtonSelector: ".delete-node"
    }
  }


  var nodeDuplicator = new Duplicator(settings);
  nodeDuplicator.addNode();
});