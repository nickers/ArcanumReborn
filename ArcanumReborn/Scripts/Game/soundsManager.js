$.SoundsManager = $.SoundsManager || {};

$.extend($.SoundsManager, (function($) {
    var resources = [
        {
            Name: "MainTheme",
            Url: $.Url.Content("~/Content/music/Arcanum"),
            Format: "mp3"
        }
    ];

    return {
        Init: function() {
            var mainTheme = this.GetResourceByName("MainTheme"),
                mainThemeSound = new buzz.sound(mainTheme.Url, {
                    formats: [mainTheme.Format]
                });

            mainThemeSound.play()
                .fadeIn()
                .loop();
        },

        GetResourceByName: function(name) {
            return $.grep(resources, function(res) {
                return res.Name === name;
            })[0];
        },

        GetAllResourcesUrl: function() {
            return $.map(resources, function(res) {
                return res.Url + "." + res.Format;
            });
        }
    };
})(jQuery));