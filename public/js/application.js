$( document ).ready(function() {
  var selected = null;
  $(".issues").each(function() {
    if (selected != null) {

      while (selected.height() > $(this).height()+100) {
        console.log($(this).height());
        console.log(selected.height());
        article = selected.children('article').first().remove();
        $(this).append(article);
      };
    };

    selected = $(this);
  });
});