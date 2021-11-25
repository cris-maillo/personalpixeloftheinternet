$(function() {
    var bannercontainer = $('div.bannercontainer');
    bannercontainer.each(function() {
    var mar = $(this),indent = mar.width();
    mar.bannercontainer = function() {
        indent--;
        mar.css('text-indent',indent);
        if (indent < -1 * mar.children('div.bannerstring').width()) {
            indent = mar.width();
        }
    };
    mar.data('interval',setInterval(mar.bannercontainer,1000/60));
});
});