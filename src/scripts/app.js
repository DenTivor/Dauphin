define(['duplicator'], function(Duplicator) {
  var json = '[{"name":"John","surname":"Doe","gender":"female"},{"name":"Agata","surname":"Rowson","gender":"male"},{"name":"John","surname":"Merelinc","gender":"female"},{"name":"Ringo","surname":"Starr","gender":""}]';

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
      {type: 'dropdown', selector: "[dataattr=gender]", arraykey: "gender"},
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