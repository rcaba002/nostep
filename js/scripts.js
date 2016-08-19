$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.get('challenge1input.json', function (data) {
      console.log(data);
return;
      var items = data.items.map(function (item) {
        return item.key + ': ' + item.value;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});
