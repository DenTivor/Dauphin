define(['duplicator'], function(Duplicator) {
  var json = '[{"name":"John","surname":"Doe","gender":"female","occupation":"homeless","marital":"widow"},{"name":"Agata","surname":"Rowson","gender":"male","occupation":"homeless","marital":"divorced"},{"name":"John","surname":"Merelinc","gender":"female","occupation":"student","marital":"divorced"},{"name":"Franchesco","surname":"Gitto","gender":"male","occupation":"student","marital":"widow"}]';

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
      {type: 'radio', selector: "[dataattr=occupation]", arraykey: "occupation"},
      {type: 'radio', selector: "[dataattr=marital]", arraykey: "marital"},
    ],

    singleElements: ["radio"]
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