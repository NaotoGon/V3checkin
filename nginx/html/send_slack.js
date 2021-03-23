window.onload = function(){
  
  post_slack("generating zoom link...");

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
}