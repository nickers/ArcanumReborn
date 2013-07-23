$.SoundsManager = $.SoundsManager || {};
$.extend($.SoundsManager, (function ($) {
    var getParsedUrl = function(url) {
        var parts = url.split('.');

        return {
            ShortUrl: parts[0],
            Format: parts[1]
        };
    };

    return {
        Init: function() {
            var mainTheme = getParsedUrl($.ContentManager.GetContent("MainTheme").Url),
                mainThemeSound = new buzz.sound(mainTheme.ShortUrl, {
                    formats: [mainTheme.Format]
                });

            mainThemeSound.play()
                .fadeIn()
                .loop();
        }
    };
})(jQuery));