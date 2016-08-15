var require = window.require;

require.config({
  paths: {
    jquery: "../bower_components/jquery/dist/jquery",
    // backbone: "../bower_components/backbone/backbone",
    underscore: "../bower_components/underscore/underscore-min",
    // lodash: "../bower_components/lodash/dist/lodash",
    select2: "../bower_components/select2/dist/js/select2.min",
  },
  packages:[
    "view/page"
  ]
  // shim:
  //   preprocess:
  //     exports:"PREPROCESS"
  //   bootstrap:
  //     deps:["jquery"]
});

require(["duplicator" ,"app"],  
function(Duplicator, App) {
   
});