setTimeout(function () {
  if ($('body').text().indexOf("You saved this link on") === -1) {
    if (confirm("Save ? ") === true) {
      $('.tag-suggestion-item').each(function () {
        $(this).click();
      });
      $('.text-btn-primary').click();
      setTimeout(function () {
        window.close();
      }, 1200);
    }
  }
}, 1000);