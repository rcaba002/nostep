var jsonfile = require('jsonfile');
var file = "out.json";
var data = {name: "Justin"};

jsonfile.writeFile(file, data, function(err) {
  console.log(err);
});
