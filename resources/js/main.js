

$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "View More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("View Less");
        $("#more").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("View More");
        $("#more").slideUp();
      }
    });
  });
  
  
  
  