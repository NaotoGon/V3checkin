window.onload = function(){
  
  post_slack("generating zoom link...", {
    success: getJsonp_GAS()
  });

  function post_slack(message) {
    const url = 'https://hooks.slack.com/services/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';
    const data = {
        text: message
    };
    $.ajax({
        type: 'POST',
        url:  url,
        data: `payload=${JSON.stringify(data)}`
    });
  }
  function getJsonp_GAS() {
    $.ajax({
      type: 'GET',
      url: 'https://script.google.com/macros/s/AKfycbz_lkmIjo4HwsHKATiCmjwRCTf18Xoa9DBFrIDnS7OvsRhlxRjBrZum7QDrZNWmFMJtIg/exec',
      dataType: 'jsonp',
      jsonpCallback: 'jsondata',
      success: function(json){
      var len = json.length;
      var link = json[len-1].url;
      document.getElementById('zoomlink').href = link;
      }
    });
  }
}
