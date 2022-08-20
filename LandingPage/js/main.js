$(document).ready(function () {
  $(".myCard").fadeOut();

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 100) {
      console.log("if true", "Scroll position: ", y);
      $(".myCard").fadeOut(3000);
    } else {
      console.log("if false", "Scroll position: ", y);
      $(".myCard").fadeIn(30000);
    }
  });

  $(".myCard").click(function () {
    let imgSource = $(this);
    console.log(imgSource).children;
    console.log(this);
    $(".myModal").css("display", "block");
    $(".fadeBackground").css("display", "block");
  });

  $(".closeBtn").click(function () {
    $(".myModal").css("display", "none");
    $(".fadeBackground").css("display", "none");
  });
  $(".fadeBackground").click(function () {
    $(".myModal").css("display", "none");
    $(".fadeBackground").css("display", "none");
  });
});
