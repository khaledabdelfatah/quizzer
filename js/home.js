$(document).ready(function() {
    if ($(window).width() > 100) {
        var divWidth = $('.large-9').width();
        $('.community__venn').height(divWidth);
    } else {
        $('.community__venn').height();
    }

});
$(window).resize(function() {
    if ($(window).width() > 100) {
        var divWidth = $('.small-12').width();
        $('.community__venn').height(divWidth);
    } else {
        $('.community__venn').height();
    }
});