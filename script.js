function main() {

  $(".tab2").click(function() {
    $(".content").css('background-color', '#b5b5b7');
    $(".content1, .content3, .content4").hide();
    $(".content2, #points").show();

  });

  $(".tab1").click(function() {
    $(".content").css('background-color', '#0093C2');
    $(".content1").show();
    $(".content2, .content3, .content4").hide();

  });

  $(".tab3").click(function() {
    $(".content").css('background-color', '#677077');
    $(".content1, .content2, .content4").hide();
    $(".content3").show();

  });

  $(".tab4").click(function() {
    $(".content").css('background-color', '#252839');
    $(".content1, .content2, .content3").hide();
    $(".content4").show();

  });

  $(".tab1").hover(function() {
    $(".tab2,.tab3,.tab4").hide();
  }, function() {
    $(".tab2,.tab3,.tab4").show();
  })
  $(".tab2").hover(function() {
    $(".tab1,.tab3,.tab4").hide();
  }, function() {
    $(".tab1,.tab3,.tab4").show();
  })
  $(".tab3").hover(function() {
    $(".tab2,.tab1,.tab4").hide();
  }, function() {
    $(".tab2,.tab1,.tab4").show();
  })
  $(".tab4").hover(function() {
    $(".tab2,.tab3,.tab1").hide();
  }, function() {
    $(".tab2,.tab3,.tab1").show();
  })
}

$(document).ready(main);