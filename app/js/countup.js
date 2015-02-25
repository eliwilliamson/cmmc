$(function() {

  homeCountUp();

  function homeCountUp() {
    var COUNTUP_SPEED     = 30,
    // the step interval is an arbitrary number based on the highest counter - increase number to decrease interval
    STEP_INTERVAL     = 50;

    var $doc             = $(document),
        hasRun           = false,
        offsetTop        = $('.count').first().offset().top,
        windowHeight     = $(window).height()

    $(document).on('scroll', checkForCounterSection);

    function checkForCounterSection() {
      var scrolled = $doc.scrollTop();
      if (!hasRun && (scrolled + windowHeight > offsetTop + 100)) {
        runCount();
      }
    }

    function runCount() {
      $(".count").each(function () {
        var n = parseInt(this.innerText, 10) || parseInt(this.textContent, 10);

        $(this).text("0").animateNumber(n, step(n), COUNTUP_SPEED);
        hasRun = true;
      });
    }

    function step(n) {
      return n / STEP_INTERVAL;
    }
  }
});
