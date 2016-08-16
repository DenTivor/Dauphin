define(['duplicator'], function(Duplicator) {
  var json = '[{"name":"John","surname":"Doe","gender":"female","occupation":"homeless","marital":"widow","hobby":["fishing"],"nativestate":"AK","paymentsystems":[]},{"name":"Agata","surname":"Rowson","gender":"male","occupation":"homeless","marital":"divorced","hobby":["fishing","hunting"],"nativestate":"","paymentsystems":["2c2p","alipay","BitPay","BPAY","DataCash"]},{"name":"John","surname":"Merelinc","gender":"female","occupation":"student","marital":"divorced","hobby":["loving"],"nativestate":"IL","paymentsystems":["BitPay"]},{"name":"Franchesco","surname":"Gitto","gender":"male","occupation":"student","marital":"widow","hobby":[],"nativestate":"WA","paymentsystems":["2c2p","alipay","BitPay"]}]';

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
      {type: 'checkbox', selector: "[dataattr=hobby]", arraykey: "hobby"},
      {type: 'select2:single', selector: "[dataattr=nativestate]", arraykey: "nativestate"},
      {type: 'select2:multiple', selector: "[dataattr=paymentsystems]", arraykey: "paymentsystems"},
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