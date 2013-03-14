$(document).foundation().foundation('joyride', 'start');
    $(".togglenav").click(function () {
    
    if($(this).hasClass("gridenabled")){
      $(this).removeClass("gridenabled").addClass("listenabled");
      $(".list").show();
      $(".grid").hide();
    }else if ($(this).hasClass("listenabled")){
      $(this).removeClass("listenabled").addClass("gridenabled");
      $(".grid").show();
      $(".list").hide();
    };
});