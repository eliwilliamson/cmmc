(function ($) {
    $.fn.animateNumber = function (to, step, speed) {
        var $ele = $(this),
            num = parseFloat($ele.html()),
            up = to > num,
            num_interval = step;

        var loop = function () {
            num = (up ? num + num_interval : num - num_interval);
            if ((up && num > to) || (!up && num < to)) {
                num = to;
                clearInterval(animation)
            }
            $ele.html(parseInt(num));
        }

        var animation = setInterval(loop, speed);
    }
})(jQuery)
