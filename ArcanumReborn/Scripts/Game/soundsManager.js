$.SoundsManager = $.SoundsManager || {};

$.extend($.SoundsManager, (function($) {
    return {
        Init: function() {
            var testSound = new buzz.sound($.Url.Content("~/Content/music/Arcanum"), {
                formats: ["mp3"]
            });

            testSound.play()
                .fadeIn()
                .loop();
        }
    };
})(jQuery));