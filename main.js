setTimeout(function() {
  if (confirm("Save ? ") == true) {
    $('.tag-suggestion-item').each(function() {
      $(this).click();
    });
    $('.text-btn-primary').click();
    setTimeout(function() {
      window.close()
    }, 1200);
  }
}, 850);