$(document).ready(function() {

$('#schurfacts').hide();
  $('#schur').click(function() {
    $('#schurfacts').slideToggle();
  });

$('#parksfacts').hide();
  $('#leslie').click(function() {
    $('#parksfacts').slideToggle();
  });

  $('#officefacts').hide();
    $('#michael').click(function() {
      $('#officefacts').slideToggle();
    });

    $('#brooklynfacts').hide();
      $('#jake').click(function() {
        $('#brooklynfacts').slideToggle();
      });

    $('#goodplacefacts').hide();
      $('#eleanor').click(function() {
        $('#goodplacefacts').slideToggle();
      });

    $('#masterfacts').hide();
      $('#dev').click(function() {
        $('#masterfacts').slideToggle();
      });

});

/*
$(document).ready(() => {

  $(".facts").hide();

    $(".pix").on("click", event => {
        $(event.currentTarget)
          .closest("section")
          .siblings()
          .find(".facts")
          .slideUp();

          $(event.currentTarget)
                .parent()
                .next()
                .slideToggle();
      });
*/
