define(['duplicator'], function(Duplicator) {

  var settings1 = {
  	name: 'firstNode',
  	initialNodeSelector: ".initial-node-wrapper"
  }

  var settings2 = {
  	name: 'secondNode',
  	initialNodeSelector: ".initial-node-wrapper"
  }

  var nodeDuplicator = new Duplicator(settings1);
  var otherNodeDuplicator = new Duplicator(settings2);

  debugger;
});