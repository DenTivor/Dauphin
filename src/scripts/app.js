define(['duplicator'], function(Duplicator) {
  var json = '[{"name":"John","surname":"Doe"},{"name":"Agata","surname":"Rowson"},{"name":"John","surname":"Merelinc"},{"name":"Rodrigo","surname":"Fereros"}]';

  var settings = {
  	name: 'firstNode',
    initialNodeSelector: ".initial-node-wrapper",
    targetWrapperSelector: ".core-wrapper",
    targetInputDataSelector: ".parsed-datas-output",

    actionButtons: {
      addButtonSelector: ".add-node",
      deleteButtonSelector: ".delete-node"
    },

    dataElements: [
      {type: 'input', selector: "[dataattr=name]", arraykey: "name"},
      {type: 'input', selector: "[dataattr=surname]", arraykey: "surname"},
    ]
  }


  var nodeDuplicator = new Duplicator(settings);
  nodeDuplicator.addNode();


  $(".parse-datas").on("click", function() {
    nodeDuplicator.getData();
  });


  $(".load-datas").on("click", function() {
    nodeDuplicator.loadData(json);
  });
});